import { atom } from "jotai";
import { StudentModalStateAttribute } from "@/type/store/modal";

export const studentModalState = atom<StudentModalStateAttribute>({
  show: false,
  id: 0,
  animationState: false,
});
