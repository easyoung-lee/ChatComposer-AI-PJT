import React, { useEffect } from "react";
import { useRecoilValue } from "recoil";
import { producingMusicState, trackAtomFamily } from "../../store/atoms";

function CoverGens() {
  const track = useRecoilValue(trackAtomFamily(0));
  const music = useRecoilValue(producingMusicState);
  useEffect(() => {
    console.log(JSON.stringify(track));
    console.log(JSON.stringify(music));
  }, [track]);
  return <div>CoverGens</div>;
}

export default CoverGens;
