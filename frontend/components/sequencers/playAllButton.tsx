import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { sheduleArrayState } from "../../store/atoms";
import * as Tone from "tone";

function PlayAllButton() {
  const sheduleArray = useRecoilValue(sheduleArrayState);
  const [className, setClassName] = useState("hidden opacity-0");
  useEffect(() => {
    if (!sheduleArray.length) {
      setClassName("hidden opacity-0");
    } else {
      setClassName("opacity-100");
    }
  }, [sheduleArray]);
  // if (!sheduleArray.length) return <></>;
  const onPlay = () => {
    Tone.Transport.cancel();
    sheduleArray.forEach((schedule) => {
      schedule(Tone.Transport);
    });
    Tone.start();
  };

  return (
    <div
      className={`transition-opacity duration-200 bg-orange-200 ${className}`}
      onClick={onPlay}
    >
      PlayAllButton
    </div>
  );
}

export default PlayAllButton;
