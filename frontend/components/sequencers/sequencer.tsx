import React from "react";
import Chat from "./chat";
import InstrumentDropbox from "./instrumentDropbox";
import dynamic from "next/dynamic";

function Sequencer({
  trackId,
  setTrackIds,
}: {
  trackId: number;
  setTrackIds: any;
}) {
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
          <Chat trackId={trackId} setTrackIds={setTrackIds} />
        </div>
      </div>
      <div className="border border-white h-28">
        <Transporter trackId={trackId} />
      </div>
    </div>
  );
}

export default React.memo(Sequencer);
