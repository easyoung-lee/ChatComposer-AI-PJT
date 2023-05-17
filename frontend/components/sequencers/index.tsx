import React from "react";
import Sequencer from "./sequencer";
import PlayAllButton from "./playAllButton";

function Sequencers({ setTrackIds, trackIds }) {
  return (
    <div>
      <h3 className="w-full text-center libray_h3 text-2xl font-bold text-pink-500 text-2xl mb-[15px] mt-2">
        작곡하기
      </h3>
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
      <PlayAllButton />
    </div>
  );
}

export default Sequencers;
