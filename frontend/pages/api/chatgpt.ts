import { ChatCompletionRequestMessage, Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //post 요청에서만 수행되는 API입니다.
  const method = req.method;
  if (method !== "POST") return;

  //gpt 실행하기
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_BASE,
  });

  const openai = new OpenAIApi(configuration);

  //시스템 프롬프트와 유저 프롬프트 넣기
  const systemPrompt = `You are MusicGPT, a music creation and completion chat bot that. When a user gives you a prompt,
you return them a song showing the notes, durations, and times that they occur. Respond with just the music.
Notation looks like this:
(Note-duration-time in beats)
C4-1/4-0, Eb4-1/8-2.5, D4-1/4-3, F4-1/4-3 etc.`;

  //시스템 프롬프트의 기본값입니다
  const messages: ChatCompletionRequestMessage[] = [
    { role: "system", content: systemPrompt },
  ];

  //만일 유저가 이전 데이터를 보낸다면 이전 데이터 메시지에 담습니다.
  const prevData = req.body.prevData;
  if (prevData) {
    messages.push(...prevData);
  }

  //현재 데이터를 메시지에 담습니다.
  let userPrompt = req.body.message;

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
  //유저 프롬프트를 메시지 내역에 추가
  console.log("유저프롬프트:", userPrompt);
  messages.push({ role: "user", content: userPrompt });

  //유처 프롬프트를 createChatCompletion에 넘겨서 결과를 받음.
  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages,
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 1,
  });

  //응답 결과의 쌍으로 '{role, content}'의 형태임
  const responseMessage = response.data.choices[0].message;
  const noteInfo = textToMid(responseMessage);

  res.status(200).json({ message: response.data.choices[0].message, noteInfo });
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
    console.log("뀨");
    console.log(n);
    if (notationIndex) {
      // noteInfo.push([noteToInt(n[0]), parseFloat(n[1]) * 4, parseFloat(n[2])]); // note, duration, time
      noteInfo.push([n[0], parseFloat(n[1]), parseFloat(n[2])]); // note, duration, time
    } else {
      noteInfo.push([n[0], parseFloat(n[1])]); // note, duration
    }
  }
  return noteInfo;
}
