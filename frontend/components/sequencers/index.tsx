import React from "react";
import Sequencer from "./sequencer";

function Sequencers({ trackIds }) {
  return (
    <div>
      시퀀서스
      {trackIds.map((e) => {
        return <Sequencer key={e} trackId={e} />;
      })}
    </div>
  );
}

export default Sequencers;
