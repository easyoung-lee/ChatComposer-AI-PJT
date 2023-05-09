import React from "react";
import { useSetRecoilState } from "recoil";
import { tracksState } from "../../store/atoms";

function NewTracks() {
  //새로운 트랙을 추가하는 모달입니다.
  const setTracks = useSetRecoilState(tracksState);
  return (
    <div className="Container text-white h-full w-full">
      <div className="TracksContainer h-[90%] w-[90%] relative top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%] bg-white">
        <div
          onClick={() => {
            setTracks((prev) => [1, ...prev]);
          }}
        >
          NewTracks
        </div>
      </div>
    </div>
  );
}

export default NewTracks;
