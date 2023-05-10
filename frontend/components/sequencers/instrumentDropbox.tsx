import React, { useEffect, useMemo, useState } from "react";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { trackAtomFamily } from "../../store/atoms";
import { useRecoilState } from "recoil";

function InstrumentDropbox({ trackId }) {
  const [track, setTrack] = useRecoilState(trackAtomFamily(trackId));
  const onChangeHandler = (e) => {
    setTrack((prev) => {
      return { ...prev, musical_instrument: e.target.value };
    });
  };

  useEffect(() => {
    if (trackId === 0) {
      //trackId가 0일 때 악기를 피아노로 고정

      setTrack((prev) => {
        return { ...prev, musical_instrument: 4 };
      });
    }
  }, [trackId]);

  return (
    <div className="GenreDropboxContainer flex">
      {/* https://devdojo.com/zoltan/tailwind-css-select */}
      <select
        id="genre"
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
        defaultValue={trackId === 0 ? 4 : "default"}
        onChange={onChangeHandler}
      >
        <option value="default" disabled className="hidden">
          악기를 선택하세요
        </option>
        {InstrumentsMapEntries.map((element, index) => {
          return (
            <option key={element[0] + index} value={index}>
              {element[1]}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default InstrumentDropbox;
