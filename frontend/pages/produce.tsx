import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { tracksState } from "../store/atoms";
import NewTracks from "../components/produce/newTracks";

function Produce() {
  const [tracks, setTracks] = useRecoilState(tracksState);

  if (!tracks.length) return <NewTracks />;
  return <div>Produce</div>;
}

export default Produce;
//음악 제작 페이지 비즈니스 로직

/*
 * 트랙 배열을 만들고 트랙 갯수에 따른 
 * 장르, 감정 태그, 길이 선택
 * 최초에 만들어지는 트랙의 악기는 '피아노', [Genre : Classical Music / Keywords : Rainy Day, Sad / Length : over 20 notations / Instrument: Piano] Please make a classical music good to listen when it rains
 * 트랙을 만든 결과에 따라 '유저가 보낸 프롬프트', 전체 프롬프트 저장
 * UI에는 유저가 보낸 프롬프트를 저장, 새로운 프롬프트를 생성할 떄에는 전체 프롬프트를 발송
 * (가령 피아노, 베이스, 기타 순으로 만든 경우 '피아노', '피아노, 베이스', '피아노, 베이스, 기타'를 만든 프롬프트가 저장되어있음.)
 * 



*/
