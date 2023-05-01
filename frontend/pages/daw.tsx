import { useEffect, useState } from "react";
import { ControlPanel } from "../components/controls/ControlPanel.jsx";
import { Sequencer } from "../components/sequencer/Sequencer.jsx";
import { SequenceContextProvider } from "../context/SequenceProvider.jsx";

//출처 https://github.com/r3mot/sampler-step
const Daw = () => {
  let [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return <div></div>;

  return (
    <div className="App">
      <SequenceContextProvider>
        <ControlPanel />
        <Sequencer />
      </SequenceContextProvider>
      <h3>r3mot</h3>
    </div>
  );
};

export default Daw;
