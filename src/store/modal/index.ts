import { atom } from "jotai";

export const studentModalState = atom({
  show: false,
  id: 0,
  animationState: false,
});
