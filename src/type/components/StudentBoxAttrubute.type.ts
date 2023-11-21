export interface StudentBoxAttribute {
  name: string;
  grade: number;
  position: string;
  frameworks: string[];
  imgUrl: string;
  onClick: React.MouseEventHandler<HTMLDivElement>;
}
