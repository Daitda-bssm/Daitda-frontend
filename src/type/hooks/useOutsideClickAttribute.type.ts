import { Dispatch, SetStateAction } from "react";

export type UseOutSideClickType = (
  element: React.RefObject<HTMLDivElement>,
  initialState: boolean
) => [boolean, Dispatch<SetStateAction<boolean>>];
