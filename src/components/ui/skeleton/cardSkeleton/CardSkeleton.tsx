import { Skeleton } from "@mui/material";
import scss from "./CardSkeleton.module.scss";
import type { FC } from "react";
interface IProps {
  skeleton: string;
}
const CardSkeleton: FC<IProps> = ({ skeleton }) => {
  return (
    <div className={scss[skeleton]}>
      <Skeleton
        sx={{ bgcolor: "rgba(90, 90, 90, 0.5)", borderRadius: "4px" }}
        variant="rectangular"
        width={skeleton === "skeleton" ? 210 : 160}
        height={skeleton === "skeleton" ? 280 : 200}
      />
      <Skeleton
        sx={{ bgcolor: "rgba(90, 90, 90, 0.5)", borderRadius: "3px" }}
        variant="rectangular"
        width={skeleton === "skeleton" ? 180 : 120}
        height={skeleton === "skeleton" ? 20 : 15}
      />
      <Skeleton
        sx={{ bgcolor: "rgba(90, 90, 90, 0.5)", borderRadius: "3px" }}
        variant="rectangular"
        width={skeleton === "skeleton" ? 70 : 50}
        height={skeleton === "skeleton" ? 15 : 10}
      />
    </div>
  );
};

export default CardSkeleton;
