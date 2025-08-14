import type { FC } from "react";
import scss from "./RatingCircle.module.scss";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

interface IProps {
  vote_average: number;
  name: string;
  color: string;
}
const RatingCircle: FC<IProps> = ({ vote_average, name, color }) => {
  const percentage = Number(vote_average.toFixed(1));

  return (
    <CircularProgressbar
      value={percentage}
      text={percentage ? percentage.toString() : "0.0"}
      className={scss[name]}
      maxValue={10}
      styles={buildStyles({
        rotation: 3,
        strokeLinecap: "butt",
        pathTransitionDuration: 0.5,
        pathColor:
          percentage > 7
            ? "green"
            : percentage > 5
            ? "orange"
            : percentage > 2
            ? "red"
            : "rgb(137, 25, 0)",
        textColor: color,
      })}
    />
  );
};

export default RatingCircle;
