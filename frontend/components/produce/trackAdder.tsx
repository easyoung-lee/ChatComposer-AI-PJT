import React from "react";

function TrackAdder({ setTrackIds, trackIds }) {
  return (
    <div
      className={`h-20 w-full bg-red-900/50 ${
        trackIds.length >= 4 ? "hidden" : ""
      }`}
    >
      <div
        className="text-pink-500"
        role="button"
        onClick={() => setTrackIds((prev) => [...prev, ""])}
      >
        새로운 트랙 추가하기
      </div>
    </div>
  );
}

export default TrackAdder;
