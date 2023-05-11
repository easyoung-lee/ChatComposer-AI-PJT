import React, { useMemo, useState } from "react";
import SequencerControlBox from "./sequencerControlBox";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { sheduleArrayState, trackAtomFamily } from "../../store/atoms";
import * as Tone from "tone";
import {
  InstrumentsMapEntries,
  InstrumentsUrl,
} from "../../utils/InstrumentsMap";
import CssSpinner from "../cssSpinner";
import { Transport } from "tone/build/esm/core/clock/Transport";

function Transporter({ trackId }) {
  const track = useRecoilValue(trackAtomFamily(trackId));
  const setSheduleArrayAtom = useSetRecoilState(sheduleArrayState);

  const [isLoading, setIsLoading] = useState(true);

  if (!track.midi_description) {
    return <div></div>;
  }

  const samplerOptions =
    InstrumentsUrl[InstrumentsMapEntries[track.musical_instrument][0]];

  const onShedule = (transport: Transport) => {
    const notes = JSON.parse(track.midi_description);
    notes.forEach((e, i) => {
      // transport.schedule로 바꿈
      transport.schedule((time) => {
        // 콜백 함수에서 time을 인자로 받음
        sampler.triggerAttackRelease(e[0], e[1], time);
      }, e[2]); // 스케줄링할 시간은 e[2]
    });
  };

  const sampler = new Tone.Sampler({
    ...samplerOptions,
    onload: () => {
      setIsLoading(false);
      sampler.toDestination();
      setSheduleArrayAtom((prev) => {
        const newArray = [...prev];
        newArray[trackId] = onShedule;
        return newArray;
      });
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
