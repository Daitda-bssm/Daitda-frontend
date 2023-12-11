import { studentInfoAtom } from "@/store/component";
import { useAtom } from "jotai";

export const useInput = () => {
  const [studentInfo, setStudentInfo] = useAtom(studentInfoAtom);

  const handleStudentDataChange = (e: any) => {
    const { name, value } = e.target;
    setStudentInfo({ ...studentInfo, [name]: value });

    console.log(studentInfo);
  };

  return { handleStudentDataChange };
};
