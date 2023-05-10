import React from "react";
import { useRecoilState } from "recoil";
import { trackAtomFamily } from "../../store/atoms";
import Chat from "./chat";
import InstrumentDropbox from "./instrumentDropbox";
import dynamic from "next/dynamic";

function Sequencer({ trackId }: { trackId: number }) {
  const track = useRecoilState(trackAtomFamily(trackId));
  const Transporter = dynamic(() => import("./transporter"), {
    ssr: false,
  });
  return (
    <div className="text-white">
      <div className="flex">
        <div className="w-1/6 border border-white">
          <InstrumentDropbox trackId={trackId} />
        </div>
        <div className="w-5/6 border border-white">
          <Chat trackId={trackId} />
        </div>
      </div>
      {/* <div className="border border-white">
        <Transporter />
      </div> */}
    </div>
  );
}

export default Sequencer;
