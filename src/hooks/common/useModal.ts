import { useAtom } from "jotai";
import { studentModalState } from "@/store/modal";

export const useModal = () => {
  const [modalState, setModalState] = useAtom(studentModalState);

  const openModal = (userId: number) => {
    setModalState({ id: userId, show: true, animationState: true });
  };

  const closeModal = () => {
    setModalState({ ...modalState, animationState: false });
    setTimeout(() => {
      setModalState({ ...modalState, show: false });
    }, 175);
  };

  return { openModal, closeModal, modalState };
};
