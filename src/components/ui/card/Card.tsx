import scss from "./Card.module.scss";
import type { FC } from "react";
import type { IMovieItem } from "../../../types/schema";
import { image_api } from "../../../api";
import { useNavigate } from "react-router";

interface IProps {
  item: IMovieItem;
  select: string;
}
const Card: FC<IProps> = ({ item, select }) => {
  const navigate = useNavigate();

  const title =
    item.name === "Wednesday"
      ? "Среда"
      : item.title
      ? item.title?.length > 25
        ? `${item.title.slice(0, 25)}...`
        : item.title
      : item.name?.length > 25
      ? `${item.name.slice(0, 25)}...`
      : item.name;

  return (
    <div
      className={scss.card}
      onClick={() => navigate(`/details/${select}/${item.id}`)}
    >
      <img
        src={
          item.poster_path
            ? `${image_api}${item.poster_path}`
            : "https://bing.com/th/id/BCO.fb4d4ca5-1ee3-411a-a576-fa1d8d773d5a.png"
        }
        alt=""
      />
      <div className={scss.cardContent}>
        <h2>{title}</h2>
        <p>{item.release_date ? item.release_date : item.first_air_date}</p>
      </div>
    </div>
  );
};

export default Card;
