import scss from "./DetailBanner.module.scss";
import { useGetDetailInfoQuery } from "../../../../api/detail";
import { image_api } from "../../../../api";
import RatingCircle from "../../ratingCircle/RatingCircle";
import { useState, type FC } from "react";
import Video from "./video/Video";
import { useParams } from "react-router-dom";
import { useLanguage } from "../../../../constant/language/useLanguage";

const DetailBanner: FC = () => {
  const [modalVideo, setModalVideo] = useState<boolean>(false);
  const [show, setShow] = useState<number>(400);
  const { id } = useParams();
  const name = useParams();

  const { data: detData, error } = useGetDetailInfoQuery(name.type, id);
  const { lang } = useLanguage();

  const minutes = detData?.runtime
    ? Number(detData.runtime)
    : Number(detData?.number_of_episodes);
  const hours = Math.floor(minutes / 60);
  const mins = minutes % 60;
  const result = `${hours}h ${mins}min`;

  if (error) {
    return <h1>{lang === "en" ? "Error" : "Ошибка"}</h1>;
  }
  return (
    <div className={scss.detailBanner}>
      <div className={scss.img}>
        <img
          src={
            detData?.backdrop_path
              ? `${image_api}${detData?.backdrop_path}`
              : "https://cdn.pixabay.com/photo/2019/04/24/21/55/cinema-4153289_640.jpg"
          }
          alt=""
          style={{ height: show ? "100%" : "" }}
          className={scss.backgroundImage}
        />
        <div
          className={scss.color}
          style={{ height: show ? "100%" : "" }}
        ></div>
      </div>
      <div className={scss.banner}>
        <>
          <img
            src={
              detData?.poster_path
                ? `${image_api}${detData?.poster_path}`
                : "https://bing.com/th/id/BCO.fb4d4ca5-1ee3-411a-a576-fa1d8d773d5a.png"
            }
            alt=""
          />
          <div className={scss.info}>
            <div className={scss.name}>
              <h2>
                {detData?.title
                  ? detData.title
                  : detData?.name
                  ? detData.name
                  : lang
                  ? "Movie"
                  : "Фильм"}
              </h2>
              <h3>
                <i>{detData?.tagline}</i>
              </h3>
            </div>
            <div className={scss.rateTrailer}>
              <RatingCircle
                vote_average={Number(detData?.vote_average)}
                color="white"
                name="rating2"
              />
              <span style={{ marginInline: "-10px 10px", fontWeight: "500" }}>
                {lang === "en" ? "Rating" : "Рейтинг"}
              </span>
              <div className={scss.playbtn} onClick={() => setModalVideo(true)}>
                <svg viewBox="0 0 213.7 213.7" className={scss.circle}>
                  <circle cx="106.8" cy="106.8" r="103.3" />
                  <polygon
                    className={scss.triangle}
                    points="73.5,62.5 148.5,105.8 73.5,149.1"
                  />
                </svg>
                <span className={scss.textTriler}>Watch Trailer</span>
              </div>
            </div>
            <div className={scss.overview}>
              <h3>{lang === "en" ? "Overview" : "Обзор"}</h3>
              <p>
                {detData?.overview.slice(0, show)}
                {detData?.overview.length && detData?.overview.length > show ? (
                  show && show <= 400 ? (
                    <span onClick={() => setShow(detData?.overview.length)}>
                      {lang === "en" ? "Read More" : "Смотреть Больше"}...
                    </span>
                  ) : (
                    <span onClick={() => setShow(400)}>
                      ...{lang === "en" ? "Close" : "Закрыть"}
                    </span>
                  )
                ) : (
                  ""
                )}
              </p>
            </div>
            <div className={scss.content}>
              <h4>{lang === "en" ? "Release Date" : "Дата Выпуска"}:</h4>
              <p>
                {detData?.release_date
                  ? detData.release_date
                  : detData?.first_air_date}
              </p>
            </div>
            <hr />
            <div className={scss.content}>
              <h4>{lang === "en" ? "Runtime" : "Время"}:</h4>
              <p>{result ? result : "00"}</p>
            </div>
          </div>
        </>
      </div>
      {modalVideo && (
        <div className={scss.modalTreiler}>
          <Video setOff={setModalVideo} type={name?.type} />
        </div>
      )}
    </div>
  );
};

export default DetailBanner;
