import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { blobAudioState, sheduleArrayState } from "../../store/atoms";
import * as Tone from "tone";

function PlayAllButton() {
  const sheduleArray = useRecoilValue(sheduleArrayState);
  const [audioState, setAudioState] = useRecoilState(blobAudioState);
  const [className, setClassName] = useState("hidden opacity-0");
  const audioRef = useRef();
  useEffect(() => {
    if (!sheduleArray.length) {
      setClassName("hidden opacity-0");
    } else {
      setClassName("opacity-100");
    }
  }, [sheduleArray]);
  // if (!sheduleArray.length) return <></>;
  const onPlay = async () => {
    if (Tone.Transport) {
      Tone.Transport.stop();
      Tone.Transport.cancel();
    }

    await Tone.start();
    console.log("톤 시작됨");
    // const recorder = new Tone.Recorder();
    // recorder.start();
    // console.log("레코더 시작됨");
    const recorder = null;
    sheduleArray.forEach((schedule, i) => {
      schedule(Tone.Transport, recorder);
    });

    Tone.Transport.start();
  };

  useEffect(() => {
    if (audioState) {
      console.log("아싸 저장됨");
      console.log(audioState);
      // audioState가 있을 때만 재생
      // const audioUrl = URL.createObjectURL(audioState);
      // audioUrl.play();
      // const audioElement = new Audio(audioUrl);
      // audioElement.play();
    }
  }, [audioState]);

  return (
    <>
      <div
        className={`transition-opacity duration-200 bg-orange-200 ${className}`}
        onClick={onPlay}
      >
        PlayAllButton
      </div>
      <div>
        <audio controls ref={audioRef}></audio>
      </div>
      {/* {audioState? :<></>} */}
    </>
  );
}

export default PlayAllButton;

/*
오디오 녹음하는 법
https://codepen.io/jak_e/pen/QVqgBE


<audio controls></audio>
console.clear();

// UPDATE: there is a problem in chrome with starting audio context
//  before a user gesture. This fixes it.
let started = false;
document.documentElement.addEventListener('mousedown', () => {
  if (started) return;
  started = true;
  const audio = document.querySelector('audio');
  const synth = new Tone.Synth();
  const actx  = Tone.context;
  const dest  = actx.createMediaStreamDestination();
  const recorder = new MediaRecorder(dest.stream);

  synth.connect(dest);
  synth.toMaster();

  const chunks = [];

  const notes = 'CDEFGAB'.split('').map(n => `${n}4`);
  let note = 0;
  Tone.Transport.scheduleRepeat(time => {
    if (note === 0) recorder.start();
    if (note > notes.length) {
      synth.triggerRelease(time)
      recorder.stop();
      Tone.Transport.stop();
    } else synth.triggerAttack(notes[note], time);
    note++;
  }, '4n');

  recorder.ondataavailable = evt => chunks.push(evt.data);
  recorder.onstop = evt => {
    let blob = new Blob(chunks, { type: 'audio/ogg; codecs=opus' });
    audio.src = URL.createObjectURL(blob);
  };

  Tone.Transport.start();
});




*/
