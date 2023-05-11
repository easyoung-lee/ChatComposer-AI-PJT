import React, { useState } from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import {
  CoverGenHeightState,
  prevDataState,
  producingMusicState,
  trackAtomFamily,
} from "../../store/atoms";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { GenreMapEntries } from "../../utils/GenreMap";

import axiosApi from "../../services/customApi";
import {
  ChatGPTApiRequestBodyType,
  ChatGPTApiResponseBodyType,
} from "../../types/chatgpt";
import CssSpinner from "../cssSpinner";

function Chat({ trackId, setTrackIds }) {
  const [input, setInput] = useState("");
  const { genre, tags } = useRecoilValue(producingMusicState);
  const [track, setTrack] = useRecoilState(trackAtomFamily(trackId));
  const [prevData, setPrevData] = useRecoilState(prevDataState);
  const [isLoading, setIsLoading] = useState(false);
  const onChangeHandler = (e) => {
    setInput(e.target.value);
  };

  const retrieveChatgpt = (data: ChatGPTApiRequestBodyType) => {
    return axiosApi.post("/chatgpt", data);
  };

  const setCoverGenHeightClass = useSetRecoilState(CoverGenHeightState);
  const onSubmitHandler = (e) => {
    const instruementName = InstrumentsMapEntries[track.musical_instrument][0];
    const genreName = GenreMapEntries[genre][0];
    const date = Date.now();
    setIsLoading(true);
    if (trackId === 0) {
      setCoverGenHeightClass("h-72 opacity-100");
    }
    const data = {
      genre: genreName,
      tags,
      instrument: instruementName,
      message: input,
    } as ChatGPTApiRequestBodyType;

    if (trackId) {
      if (prevData.length) {
        data.prevData = prevData.slice(0, trackId * 2);
      }
    }
    retrieveChatgpt(data).then((res) => {
      const data = res.data as ChatGPTApiResponseBodyType;
      const userPrompt = data.prompt.at(-2);
      const chatGPTPrompt = data.prompt.at(-1);
      setTrack((prev) => ({
        ...prev,
        musical_instrument: track.musical_instrument,
        midi_description: JSON.stringify(data.noteInfo),
        request_description: JSON.stringify(userPrompt),
        response_description: JSON.stringify(chatGPTPrompt),
        transfer_date: date.toFixed(),
      }));
      setTrackIds((prev) => {
        const newArray = JSON.parse(JSON.stringify(prev));
        newArray[trackId] = [userPrompt, chatGPTPrompt];
        setPrevData((prev) => {
          const newArray = [...prev];
          newArray.splice(trackId * 2, 2, userPrompt, chatGPTPrompt);
          return newArray;
        });
        return newArray;
      });
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
