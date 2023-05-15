import React, { useEffect, useRef, useState } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { blobAudioState, sheduleArrayState } from "../../store/atoms";
// import { createFFmpeg } from "@ffmpeg/ffmpeg";
import * as Tone from "tone";
// import { createFFmpeg } from "@ffmpeg/ffmpeg";
import { WavRecorder } from "webm-to-wav-converter";

function PlayAllButton() {
  const sheduleArray = useRecoilValue(sheduleArrayState);
  const [audioState, setAudioState] = useRecoilState(blobAudioState);
  const [isPlaying, setIsPlaying] = useState(false);
  const [className, setClassName] = useState("hidden opacity-0");
  // const audioRef = useRef();
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
    setIsPlaying(true);
    const recorder = new Tone.Recorder();
    // const recorder = new WavRecorder();

    // const recorder = null;
    console.log(sheduleArray);
    sheduleArray.forEach((schedule, i) => {
      schedule(Tone.Transport, recorder);
    });
    console.log("레코더 시작됨");
    recorder.start();
    Tone.Transport.start();
  };

  const onRecordedPlay = () => {
    const audioUrl = URL.createObjectURL(audioState);
    const audioElement = new Audio(audioUrl);
    audioElement.play();
  };
  useEffect(() => {
    if (audioState) {
      setIsPlaying(false);
      // console.log("아싸 저장됨");
      // console.log(audioState);
      // audioState가 있을 때만 재생

      // const audioUrl = URL.createObjectURL(audioState);
      // audioUrl.play();
      // const audioElement = new Audio(audioUrl);
      // audioElement.play();

      // audio/webm;codecs=opus 파일을 wav파일로 변환하는 함수
      // const convertWebmToWav = async (webmFile) => {
      //   // @ffmpeg/ffmpeg 객체 생성
      //   const ffmpeg = createFFmpeg({ log: false });
      //   // @ffmpeg/ffmpeg 로드
      //   await ffmpeg.load();
      //   // 입력 파일 이름
      //   const inputName = "input.webm";
      //   // 출력 파일 이름
      //   const outputName = "output.wav";
      //   // 입력 파일을 가상 파일 시스템에 쓰기
      //   ffmpeg.FS("writeFile", inputName, webmFile);
      //   // ffmpeg 명령어 실행
      //   await ffmpeg.run("-i", inputName, outputName);
      //   // 출력 파일 읽기
      //   const outputData = ffmpeg.FS("readFile", outputName);
      //   // 출력 파일을 Blob 객체로 변환
      //   const outputBlob = new Blob([outputData.buffer], { type: "audio/wav" });
      //   console.log("wav반환됨");
      //   const audioUrl = URL.createObjectURL(outputBlob);
      //   // audioUrl.play();
      //   const audioElement = new Audio(audioUrl);
      //   audioElement.play();
      //   // Blob 객체 반환
      //   return outputBlob;
      // };
      // convertWebmToWav(audioState);
    }
  }, [audioState]);

  return (
    <div className="flex w-full">
      <button
        className={`transition-opacity duration-200 bg-orange-200 ${className} w-full`}
        onClick={onPlay}
        disabled={isPlaying}
      >
        {isPlaying ? "녹음중" : audioState ? "다시 녹음하기" : "녹음하기"}
      </button>
      {audioState ? (
        <div
          className="bg-red-200 w-full"
          onClick={onRecordedPlay}
          role="button"
        >
          재생하기
        </div>
      ) : (
        <></>
      )}
    </div>
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
