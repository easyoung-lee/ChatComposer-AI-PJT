import React, { useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { producingMusicState, trackAtomFamily } from "../../store/atoms";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { GenreMapEntries } from "../../utils/GenreMap";

import axiosApi from "../../services/customApi";
import {
  ChatGPTApiRequestBodyType,
  ChatGPTApiResponseBodyType,
} from "../../types/chatgpt";
import CssSpinner from "../cssSpinner";

function Chat({ trackId }) {
  const [input, setInput] = useState("");
  const { genre, tags } = useRecoilValue(producingMusicState);
  const [track, setTrack] = useRecoilState(trackAtomFamily(trackId));
  const [isLoading, setIsLoading] = useState(false);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const retrieveChatgpt = (data: ChatGPTApiRequestBodyType) => {
    return axiosApi.post("/chatgpt", data);
  };

  const onSubmitHandler = (e) => {
    const instruementName = InstrumentsMapEntries[track.musical_instrument][0];
    const genreName = GenreMapEntries[genre][0];
    const date = Date.now();
    setIsLoading(true);
    retrieveChatgpt({
      genre: genreName,
      tags,
      instrument: instruementName,
      message: input,
    }).then((res) => {
      const data = res.data as ChatGPTApiResponseBodyType;
      setTrack((prev) => ({
        ...prev,
        musical_instrument: track.musical_instrument,
        midi_description: JSON.stringify(data.noteInfo),
        request_description: JSON.stringify(data.prompt[0]),
        response_description: JSON.stringify(data.prompt[1]),
        transfer_date: date.toFixed(),
      }));
      setIsLoading(false);
    });
  };

  return (
    <div className="w-full h-full flex">
      <input
        className="w-4/5 bg-gray-700 placeholder-gray-300 px-4"
        value={input}
        onChange={onChangeHandler}
        placeholder="만들고 싶은 음악을 묘사해보세요!"
      ></input>

      <button
        type="button"
        onClick={onSubmitHandler}
        className={`w-1/5 ${
          !isLoading && track.musical_instrument !== null && input
            ? ""
            : "opacity-50"
        }`}
        disabled={!(!isLoading && track.musical_instrument !== null && input)}
      >
        {isLoading ? (
          <div className="flex justify-center">
            <CssSpinner />
          </div>
        ) : (
          <>음악 생성하기</>
        )}
      </button>
    </div>
  );
}

export default Chat;
