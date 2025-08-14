import { useNavigate, useParams } from "react-router-dom";
import { useGetDetailActorQuery } from "../../../../../api/actor";
import scss from "./ActorDetail.module.scss";
import { image_api } from "../../../../../api";
import { useState } from "react";
import { useGetActorMoviesQuery } from "../../../../../api/actor/actorMovies";
import { useLanguage } from "../../../../../constant/language/useLanguage";
const ActorDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: actorDetail } = useGetDetailActorQuery(id);
  const { data: actorMovies } = useGetActorMoviesQuery(id);
  const { lang } = useLanguage();
  const [show, setShow] = useState(400);
  window.scrollTo(0, 0);

  return (
    <div className={scss.actor}>
      <div className={scss.actorInfo}>
        <img
          className={scss.mainActorImg}
          src={
            actorDetail?.profile_path
              ? `${image_api}/${actorDetail.profile_path}`
              : "https://cdn-icons-png.flaticon.com/512/6542/6542931.png"
          }
          alt={actorDetail?.name}
        />
        <div className={scss.info}>
          <h1>{actorDetail?.name}</h1>
          <div className={scss.biography}>
            <h2>Biography</h2>
            <p>
              <i>
                {actorDetail?.biography
                  ? actorDetail?.biography.slice(0, show)
                  : "No data available"}
              </i>

              {actorDetail?.biography &&
                actorDetail?.biography.length > 430 &&
                (show <= 430 ? (
                  <span onClick={() => setShow(actorDetail?.biography.length)}>
                    Read more...
                  </span>
                ) : (
                  <span onClick={() => setShow(400)}>...Close</span>
                ))}
            </p>
          </div>
          <div className={scss.fameFor}>
            <div className={scss.fameForTop}>
              <h2>{lang === "en" ? "Fame for:" : "Известен за:"}</h2>
            </div>
            <div className={scss.fameForList}>
              {actorMovies?.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => navigate(`/details/movie/${item.id}`)}
                  className={scss.actorMovie}
                >
                  <img
                    src={
                      item.backdrop_path
                        ? `${image_api}${item.poster_path}`
                        : "https://bing.com/th/id/BCO.fb4d4ca5-1ee3-411a-a576-fa1d8d773d5a.png"
                    }
                    alt={item.title}
                  />
                  <div className={scss.modalInfo}>
                    <h4>
                      {item.title.length > 28
                        ? item.title.slice(0, 28) + "..."
                        : item.title}
                    </h4>
                    <p>{item.release_date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className={scss.actorBottom}>
        {actorDetail?.name ? (
          <div className={scss.div}>
            <h3>Name</h3>
            <p>{actorDetail?.name}</p>
          </div>
        ) : (
          ""
        )}
        {actorDetail?.known_for_department ? (
          <div className={scss.div}>
            <h3>Fame For</h3>
            <p>{actorDetail?.known_for_department}</p>
          </div>
        ) : (
          ""
        )}
        {actorDetail?.birthday ? (
          <div className={scss.div}>
            <h3>Birthday</h3>
            <p>{actorDetail?.birthday}</p>
          </div>
        ) : (
          ""
        )}
        {actorDetail?.place_of_birth ? (
          <div className={scss.div}>
            <h3>Зlace of birth</h3>
            <p>{actorDetail?.place_of_birth}</p>
          </div>
        ) : (
          ""
        )}
        {actorDetail?.also_known_as ? (
          <div className={scss.div}>
            <h3>Also known as</h3>
            <p>{actorDetail?.also_known_as.map((item) => item)}</p>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ActorDetail;
