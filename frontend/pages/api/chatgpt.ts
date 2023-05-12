import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { GenreType, InstrumentType, TagType } from "../../types/musics";
import {
  ChatGPTApiRequestBodyType,
  ChatGPTApiResponseBodyType,
  ChatGPTPromptType,
} from "../../types/chatgpt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ChatGPTApiResponseBodyType>,
) {
  //post 요청에서만 수행되는 API입니다.
  const method = req.method;
  if (method !== "POST") return;
  const body = req.body as ChatGPTApiRequestBodyType;

  // /* 오프라인 테스트용 코드 */
  function wait(ms) {
    return new Promise((resolve) => {
      setTimeout(resolve, ms);
    });
  }
  await wait(2000);
  return res.status(200).json({
    prompt: [
      {
        role: "user",
        content: "[instruement: piano]A good song to listen to on a rainy day",
      },
      {
        role: "assistant",
        content:
          "Here's a calming piano piece for a rainy day:\n\nG4-1/4-0, C5-1/8-1, D5-1/8-1.5, F5-1/4-2, G5-1/4-2.5, F5-1/4-3, D5-1/4-3.5, C5-1/2-4, G4-1/4-4.5, C5-1/4-5, D5-1/4-5.5, F5-1/4-6, G5-1/2-6.5, F5-1/4-7, D5-1/4-7.5, C5-1/2-8 ",
      },
    ],
    noteInfo: [
      ["G4", 0.5, 0],
      ["C5", 0.25, 0.5],
      ["D5", 0.25, 0.75],
      ["F5", 0.5, 1],
      ["G5", 0.5, 1.25],
      ["F5", 0.5, 1.5],
      ["D5", 0.5, 1.75],
      ["C5", 1, 2],
      ["G4", 0.5, 2.25],
      ["C5", 0.5, 2.5],
      ["D5", 0.5, 2.75],
      ["F5", 0.5, 3],
      ["G5", 1, 3.25],
      ["F5", 0.5, 3.5],
      ["D5", 0.5, 3.75],
      ["C5", 1, 4],
    ],
  });
  // /* 오프라인 테스트용 코드 종료 */

  //gpt 실행하기
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_BASE,
  });

  const openai = new OpenAIApi(configuration);

  //시스템 프롬프트와 유저 프롬프트 넣기
  const systemPrompt = `You are MusicGPT, a music creation and completion chat bot that. When a user gives you a prompt,
  you return them a song showing the notes, durations, and times that they occur. Respond with just the music.
  Here's music infomation - [Genre : ${body.genre}, Moods: ${body.tags.join(
    " ",
  )}]
  Plan out the structure beforehand. Notation looks like this using quaver and keep the form:
  (Note-duration-time in beats)
  C4-2/8-0, Eb4-1/8-2.5, D4-2/8-3, F4-2/8-3 etc.`;
  //   const systemPrompt = `You are MusicGPT, a music creation and completion chat bot that. When a user gives you a prompt,
  // you return them a song showing the notes, durations, and times that they occur. Respond with just the music. Music has three instruments - guitar, bass, piano
  // Notation looks like and keep the form. Use quarter note only!:
  // (Note-duration-time in beats)
  // TRACKNUMBER1 guitar : C4-1/4-0, Eb4-1/4-2.5, D4-2/4-3, F4-2/4-3 etc
  // TRACKNUMBER2 bass : C4-1/4-0, Eb4-1/4-2.5, D4-2/4-3, F4-2/4-3 etc
  // TRACKNUMBER3 piano : C4-1/4-0, Eb4-1/4-2.5, D4-2/4-3, F4-2/4-3 etc.`;

  //시스템 프롬프트의 기본값입니다
  const messages: ChatCompletionRequestMessage[] = [
    { role: "system", content: systemPrompt },
  ];

  //만일 유저가 이전 데이터를 보낸다면 이전 데이터 메시지에 담습니다.
  const prevData = body.prevData;
  if (prevData && prevData.length) {
    messages.push(...prevData);
  }

  //현재 데이터를 메시지에 담습니다.

  let userPrompt = body.message;

  //만일 현재 데이터에 한국어가 포함되어 있다면, 파파고를 호출하여 영어로 번역합니다 결과를 반환합니다.
  if (/[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/.test(userPrompt)) {
    //파파고 api 호출
    const papagoApi = axios.create({
      baseURL: "https://openapi.naver.com/v1/papago/n2mt",
      headers: {
        "X-Naver-Client-Id": process.env.X_NAVER_CLIENT_ID,
        "X-Naver-Client-Secret": process.env.X_NAVER_SECRET_ID,
      },
    });
    //파파고 한-영 번역을 거친 결과를 userPrompt로 저장
    userPrompt = await papagoApi
      .post("", { source: "ko", target: "en", text: userPrompt })
      .then((res) => res.data.message.result.translatedText)
      .catch((err) => console.log(JSON.stringify(err)));
  }

  userPrompt = `[instruement: ${body.instrument}]` + userPrompt;
  if (prevData) userPrompt = "with previous response / " + userPrompt;

  //유저 프롬프트를 메시지 내역에 추가
  messages.push({
    role: "user",
    content: userPrompt,
  });

  //유처 프롬프트를 createChatCompletion에 넘겨서 결과를 받음.
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    // max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 1,
  });

  //응답 결과의 쌍으로 '{role, content}'의 형태임
  const responseMessage = response.data.choices[0].message;
  // const noteInfo = floatToInt(textToMid(responseMessage));
  const noteInfo = textToMid(responseMessage);
  // console.log(response.data.choices[0].message);
  // console.log(JSON.stringify({ message: responseMessage, noteInfo }));
  // console.log(
  //   JSON.stringify({
  //     prev: [{ role: "user", content: userPrompt }, { ...responseMessage }],
  //     noteInfo,
  //   }),
  // );
  // res.status(200).json({ message: responseMessage, noteInfo });

  const prompt: ChatGPTPromptType = [
    { role: "user", content: userPrompt },
    { ...responseMessage },
  ];
  if (prevData) prompt.unshift(...prevData);
  // console.log(JSON.stringify(res));
  console.log(
    JSON.stringify({
      prompt,
      noteInfo,
    }),
  );
  res.status(200).json({
    prompt,
    noteInfo,
  });
}

//파이썬으로 이용하기 https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/chatgpt?pivots=programming-language-chat-completions
//next.js chatgptui https://github.com/nemoteric/GPT-4-Chat-UI
const notes = [
  ["C"],
  ["Db", "C#"],
  ["D"],
  ["Eb", "D#"],
  ["E"],
  ["F"],
  ["Gb", "F#"],
  ["G"],
  ["Ab", "G#"],
  ["A"],
  ["Bb", "A#"],
  ["B"],
];

const monsters = [
  /(?<![A-Za-z\d])([A-G](?:#|b)?\d-(?:\d+\/\d+|\d+))(?![A-Za-z\d])/g,
  /(?<![A-Za-z\d])([A-G](?:#|b)?\d(?:-\d+(?:\/\d+)?(?:-\d+(?:\.\d+)?)?)+)(?![A-Za-z\d])/g,
];

function sharpToFlat(note: string) {
  // if (note.includes("#")) {
  //   const scale = note.slice(0, 2);
  //   const octav = note.slice(2, 3);
  //   switch (scale) {
  //     case "C#":
  //       return "Db" + octav;
  //     case "D#":
  //       return "Eb" + octav;
  //     case "F#":
  //       return "Gb" + octav;
  //     case "G#":
  //       return "Ab" + (~~octav + 1).toString();
  //     case "A#":
  //       return "Bb" + octav;
  //   }
  // }
  //플랫일때 샾으로 바꾸도록 변경
  if (note.includes("b")) {
    const scale = note.slice(0, 2);
    const octav = note.slice(2, 3);
    switch (scale) {
      case "Db":
        return "C#" + octav;
      case "Eb":
        return "D#" + octav;
      case "Gb":
        return "F#" + octav;
      case "Ab":
        return "G#" + (~~octav - 1).toString();
      case "Bb":
        return "A#" + octav;
    }
  }
  return note;
}

function noteToInt(n) {
  const oct = parseInt(n.slice(-1));
  const letter = n.slice(0, -1);
  let id = 0;
  for (let i = 0; i < notes.length; i++) {
    for (let j = 0; j < notes[i].length; j++) {
      if (letter === notes[i][j]) {
        id = i;
      }
    }
  }
  return id + oct * 12 + 12;
}

function textToMid(responseMessage) {
  const inText = responseMessage.content;
  const notationIndex = 1;
  const noteInfo = [];
  for (const i of inText.matchAll(monsters[notationIndex])) {
    const n = i[1].split("-");

    if (notationIndex) {
      //최대 16분음표까지 쓰도록 수정
      // noteInfo.push([
      //   sharpToFlat(n[0]),
      //   fraction(n[1]) * 16,
      //   parseFloat(n[2]) * 8,
      // ]);
      //4분음표를 쓰도록 수정
      // noteInfo.push([
      //   sharpToFlat(n[0]),
      //   fraction(n[1]) * 2,
      //   parseFloat(n[2]) * 2,
      // ]);
      noteInfo.push([
        sharpToFlat(n[0]),
        fraction(n[1]) * 2,
        parseFloat(n[2]) / 2,
      ]);
    } else {
      // noteInfo.push([sharpToFlat(n[0]), fraction(n[1])]) * 16; // note, duration
      noteInfo.push([sharpToFlat(n[0]), fraction(n[1])]) * 2;
    }
  }
  return noteInfo;
}

function fraction(str: string) {
  let [numerator, denom] = str.split("/");
  let denominator = denom;
  if (!denominator) denominator = "1";
  return ~~numerator / ~~denominator;
}

function floatToInt(arr: Array<Array<any>>) {
  const len = arr.length;
  let hasFloat = false;
  let resultArray = arr;
  for (let i = 0; i < len; i++) {
    arr[i];
    if (arr[i][1] % 1 || arr[i][2] % 1) {
      hasFloat = true;
      break;
    }
  }

  if (hasFloat) {
    const newArr = arr.map((e) => {
      return [e[0], e[1] * 2, e[2] * 2];
    });
    resultArray = floatToInt(newArr);
  }

  return resultArray;
}
