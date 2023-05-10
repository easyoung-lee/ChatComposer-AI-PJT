import React, { useEffect, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { producingMusicState, trackAtomFamily } from "../../store/atoms";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { GenreMapEntries } from "../../utils/GenreMap";

import axiosApi from "../../services/customApi";
import {
  ChatGPTApiRequestBodyType,
  ChatGPTApiResponseBodyType,
} from "../../types/chatgpt";

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
  useEffect(() => {
    console.log(JSON.stringify(track));
  }, [track]);

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
            <svg className="h-4 w-4 animate-spin" viewBox="3 3 18 18">
              <path
                className="fill-blue-800"
                d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
              ></path>
              <path
                className="fill-blue-100"
                d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
              ></path>
            </svg>
            {/* <span>Loading...</span> */}
          </div>
        ) : (
          <>음악 생성하기</>
        )}
      </button>
    </div>
  );
}

export default Chat;
