import { atom } from "jotai";
import { StudentInfoAtomAttribute } from "@/type/store/component";

export const studentInfoAtom = atom<StudentInfoAtomAttribute>({
  profileImg: "",
  oneSentence: "",
  githubLink: "",
  notionLink: "",
  velogLink: "",
  skills: "",
  projects: "",
  Awards: "",
  Certificates: "",
  part: "",
  major: "",
  grade: "",
});
