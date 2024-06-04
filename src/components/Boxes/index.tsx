import { ResolutionTypes } from "@/const/resolutioon";

export interface BoxProps {
  float: "left" | "right";
  title: string;
  description: string;
  list_title: string;
  list_items: string[];
  Svg: React.FC;
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}
