import React from "react";

function SequencerControlBox({ onPlay }) {
  return (
    <>
      <div role="button" onClick={onPlay}>
        재생하기
      </div>
    </>
  );
}

export default SequencerControlBox;
