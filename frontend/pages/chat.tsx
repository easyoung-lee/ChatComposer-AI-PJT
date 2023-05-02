import axios from "axios";
import React, { useState } from "react";

const chat = () => {
  const ChatApi = axios.create();

  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  const prevData = [
    { role: "user", content: "classicMusic" },
    {
      role: "assistant",
      content:
        "G4-1/4-0, G4-1/4-0.5, A4-1/4-1, A4-1/4-1.5, B4-1/4-2, B4-1/4-2.5, A4-1/2-3, G4-1/2-3.5, G4-1/4-4, A4-1/4-4.5, A4-1/4-5, B4-1/4-5.5, B4-1/4-6, A4-1/2-6.5, G4-1/2-7.",
    },
  ];

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button
        onClick={() => {
          ChatApi.post("http://localhost:3000/api/chatgpt", {
            message: input,
            prevData,
          }).then((res) => setMessage(JSON.stringify(res.data)));
        }}
      >
        전송하기
      </button>
      <div>{message}</div>
    </div>
  );
};

export default chat;
