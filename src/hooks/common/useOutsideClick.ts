import { Dispatch, SetStateAction, useEffect, useState } from "react";

type UseOutSideClickType = (
  element: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];

export const useOutsideClick: UseOutSideClickType = (element, initialState) => {
  const [isActive, setIsActive] = useState(initialState);

  useEffect(() => {
    const pageClickEvent = (e: any) => {
      if (element.current !== null && !element.current.contains(e.target)) {
        setIsActive(!isActive);
      }
    };
    if (isActive) {
      window.addEventListener("click", pageClickEvent);
    }

    return () => window.removeEventListener("click", pageClickEvent);
  }, [isActive]);

  return [isActive, setIsActive];
};
