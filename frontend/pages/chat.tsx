import axios from "axios";
import React, { useState } from "react";

const chat = () => {
  const ChatApi = axios.create();

  const [message, setMessage] = useState("");
  const [input, setInput] = useState("");

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)}></input>
      <button
        onClick={() => {
          ChatApi.get("http://localhost:3000/api/chatgpt").then((res) =>
            setMessage(JSON.stringify(res.data)),
          );
        }}
      >
        전송하기
      </button>
      <div>{message}</div>
    </div>
  );
};

export default chat;
