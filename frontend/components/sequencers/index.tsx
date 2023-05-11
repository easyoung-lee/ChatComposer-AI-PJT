import React from "react";
import Sequencer from "./sequencer";

function Sequencers({ setTrackIds, trackIds }) {
  return (
    <div>
      시퀀서스
      {trackIds.map((e, i) => {
        return <Sequencer key={i} trackId={i} setTrackIds={setTrackIds} />;
      })}
    </div>
  );
}

export default Sequencers;
