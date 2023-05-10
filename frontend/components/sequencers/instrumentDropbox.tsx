import React, { useMemo } from "react";
import { InstrumentsMapEntries } from "../../utils/InstrumentsMap";
import { useSetRecoilState } from "recoil";
import { trackAtomFamily } from "../../store/atoms";

function InstrumentDropbox({ trackId }) {
  const setTrack = useSetRecoilState(trackAtomFamily(trackId));

  const defaultValue = useMemo(() => {
    if (trackId === 0) {
      setTrack((prev) => {
        return { ...prev, musical_instrument: 4 };
      });
      return 4;
    } else {
      return "default";
    }
  }, [trackId]);

  const onChangeHandler = (e) => {
    setTrack((prev) => {
      return { ...prev, musical_instrument: e.target.value };
    });
  };
  return (
    <div className="GenreDropboxContainer flex">
      {/* https://devdojo.com/zoltan/tailwind-css-select */}
      {/* <label
        htmlFor="genre"
        className="w-12 py- block mb-2 text-sm font-medium text-gray-400"
      >
        악기
      </label> */}
      <select
        id="genre"
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 placeholder-gray-400"
        defaultValue={defaultValue}
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
