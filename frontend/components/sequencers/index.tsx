import React from "react";
import Sequencer from "./sequencer";
import PlayAllButton from "./playAllButton";

function Sequencers({ setTrackIds, trackIds }) {
  return (
    <div>
      시퀀서스
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
