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
    notes
      .sort((a, b) => a[2] - b[2])
      .forEach((e, i) => {
        // transport.schedule로 바꿈
        transport.schedule((time) => {
          // 콜백 함수에서 time을 인자로 받음
          sampler.triggerAttackRelease(e[0], e[1], time);
        }, e[2]); // 스케줄링할 시간은 e[2]

        if (trackId === 0 && i === notes.length - 1) {
          //만약, 피아노이고 마지막 노트라면 2박자 후에 노래를 정지한다.
          //노래를 정지하는 이벤트
          transport.schedule((time) => {
            transport.stop();
          }, e[2] + 2);
        }
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
