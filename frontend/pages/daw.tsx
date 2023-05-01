import React, { useEffect, useState } from "react";
import DawApp from "../components/daw/DawApp.js";

const Daw = () => {
  const [RenderApp, setRenderApp] = useState(<div></div>);
  useEffect(() => setRenderApp(<DawApp></DawApp>));

  return RenderApp;
};

export default Daw;
