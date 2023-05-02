import { atom } from "recoil";

const machineBeatsCount = atom({
  key: "beats",
  default: 32,
});

export default machineBeatsCount;
