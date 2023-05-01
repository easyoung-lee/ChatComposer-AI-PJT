import { Configuration, OpenAIApi } from "openai";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  //gpt4 실행하기
  const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_BASE,
  });

  const openai = new OpenAIApi(configuration);

  const response = await openai.createChatCompletion({
    model: "gpt-3.5-turbo",
    messages: [
      { role: "system", content: "You are a helpful assistant." },
      { role: "user", content: "Who won the world series in 2020?" },
      { role: "assistant", content: "The Los Angeles Dodgers." },
      { role: "user", content: "Where was it played?" },
    ],
    max_tokens: 50,
    n: 1,
    stop: null,
    temperature: 1,
  });
  console.log("실행됨");
  res.status(200).json({ answer: response.data.choices[0].message.content });
  // res.status(200).json({ answer: response.data.choices[0].message.content });
}

//파이썬으로 이용하기 https://learn.microsoft.com/en-us/azure/cognitive-services/openai/how-to/chatgpt?pivots=programming-language-chat-completions
//next.js chatgptui https://github.com/nemoteric/GPT-4-Chat-UI
