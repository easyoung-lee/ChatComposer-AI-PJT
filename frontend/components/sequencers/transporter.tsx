import React, { useState } from "react";
import SequencerControlBox from "./sequencerControlBox";
import { useRecoilValue } from "recoil";
import { trackAtomFamily } from "../../store/atoms";
import * as Tone from "tone";
import {
  InstrumentsMapEntries,
  InstrumentsUrl,
} from "../../utils/InstrumentsMap";
import CssSpinner from "../cssSpinner";

function Transporter({ trackId }) {
  const track = useRecoilValue(trackAtomFamily(trackId));
  const [isLoading, setIsLoading] = useState(true);

  if (!track.midi_description) {
    return <div></div>;
  }

  const samplerOptions =
    InstrumentsUrl[InstrumentsMapEntries[track.musical_instrument][0]];

  const sampler = new Tone.Sampler({
    ...samplerOptions,
    onload: () => {
      setIsLoading(false);
      sampler.toDestination();
    },
  });

  const onPlay = () => {
    const notes = JSON.parse(track.midi_description);

    const now = Tone.now();
    Tone.Transport.bpm.value = 100;

    notes.forEach((e, i) => {
      sampler.triggerAttackRelease(e[0], e[1], now + e[2]);
    });
  };

  return (
    <div>
      {track.midi_description}
      {isLoading ? <CssSpinner /> : <SequencerControlBox onPlay={onPlay} />}
    </div>
  );
}

export default Transporter;
