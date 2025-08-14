import type { FC } from "react";
import type { IMovieItem } from "../../../types/schema";
import scss from "./HomeText.module.scss";
import { image_api } from "../../../api";
import { useGetDetailInfoQuery } from "../../../api/detail";
import { useNavigate } from "react-router-dom";
import { useLanguage } from "../../../constant/language/useLanguage";

interface IProps {
  randomIndex?: IMovieItem;
  show: number;
  setShow: (show: number) => void;
}
const HomeText: FC<IProps> = ({ randomIndex, show, setShow }) => {
  const navigate = useNavigate();
  const { data: detData } = useGetDetailInfoQuery(
    "movie",
    randomIndex?.id.toString()
  );
  const { lang } = useLanguage();
  const countries = [
    {
      country: "USA",
      language: "en",
    },
    {
      country: "RU",
      language: "ru",
    },
    {
      country: "JP",
      language: "ja",
    },
    {
      country: "KR",
      language: "ko",
    },
    {
      country: "ZH",
      language: "zh",
    },
  ];

  const minutes: string | undefined =
    typeof detData?.runtime && detData?.runtime;
  const hours = Math.floor(Number(minutes) / 60);
  const mins = Number(minutes) % 60;
  const result = `${hours}h ${mins}min`;

  const percentage = randomIndex?.vote_average.toFixed(1);

  return (
    <div className={scss.text}>
      <div className={scss.info}>
        <div className={scss.discraptions}>
          <div className={scss.textTop}>
            <p>{lang === "en" ? "Movies" : "Фильмы"}</p>
            {randomIndex?.adult && <p>18+</p>}
            <p>{randomIndex?.release_date.slice(0, 4)}</p>
            <p>
              {countries.map(
                (item) =>
                  item.language === randomIndex?.original_language &&
                  item.country
              )}
            </p>
            <p>{result}</p>
          </div>
          <div className={scss.title}>
            <h1>
              {`${randomIndex?.title.slice(0, 20)}${
                Number(randomIndex?.title?.length) > 20 ? "..." : ""
              }`}
            </h1>
            <div className={scss.toDetail}>
              <span
                className={scss.rating}
                style={{
                  color:
                    Number(percentage) > 7
                      ? "rgba(73, 255, 53, 1)"
                      : Number(percentage) > 5
                      ? "orange"
                      : Number(percentage) > 2
                      ? "red"
                      : "rgb(137, 25, 0)",
                }}
              >
                {percentage}
              </span>
              <button
                onClick={() =>
                  navigate(`/details/movie/${randomIndex?.id}`, { state: 0 })
                }
              >
                {lang === "en" ? "To Movie" : "К Фильму"}
              </button>
            </div>
            <i>
              {randomIndex?.overview.slice(0, show)}
              {randomIndex?.overview != undefined &&
              randomIndex?.overview?.length >= show ? (
                show === 250 ? (
                  <span
                    style={{ color: "rgba(37, 253, 73, 1)" }}
                    onClick={() => setShow(randomIndex?.overview?.length)}
                  >
                    ...
                  </span>
                ) : (
                  <span
                    style={{ color: "rgba(37, 253, 73, 1)" }}
                    onClick={() => setShow(250)}
                  >
                    {"<<<"}
                  </span>
                )
              ) : (
                ""
              )}
            </i>
            <span className={scss.date}>{randomIndex?.release_date}</span>
          </div>
        </div>
        <img src={`${image_api}${randomIndex?.poster_path}`} alt="" />
      </div>
    </div>
  );
};

export default HomeText;
