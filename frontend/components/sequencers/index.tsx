import React from "react";
import Sequencer from "./sequencer";
import PlayAllButton from "./playAllButton";

function Sequencers({ setTrackIds, trackIds }) {
  return (
    <div>
      <h3 className="w-full text-center libray_h3 font-bold text-pink-500 text-2xl mb-[15px] mt-2">
        작곡하기
      </h3>
      <PlayAllButton />
      {trackIds.map((e, i) => {
        return (
          <Sequencer
            key={i}
            trackId={i}
            setTrackIds={setTrackIds}
            // trackIds={trackIds}
          />
        );
      })}
    </div>
  );
}

export default Sequencers;
