import { useGetActorsQuery } from "../../../../api/detail/cast";
import scss from "./Actors.module.scss";
import { image_api } from "../../../../api";
import CardSkeleton from "../../skeleton/cardSkeleton/CardSkeleton";
import type { FC } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useLanguage } from "../../../../constant/language/useLanguage";

interface IProps {}
const Actors: FC<IProps> = () => {
  const { id } = useParams();
  const name = useParams();
  const { data: actors, isLoading } = useGetActorsQuery(name.type, id);
  const navigate = useNavigate();
  const { lang } = useLanguage();
  return (
    <>
      <h2 style={{ margin: "20px 40px" }}>
        {lang === "en" ? "Actors" : "Актеры"}
      </h2>
      <div className={scss.cast} style={{ color: "white" }}>
        {actors?.cast.map((item, idx) =>
          !isLoading ? (
            <div
              className={scss.actor}
              key={idx}
              onClick={() => navigate(`/${name.type}/actor/detail/${item.id}`)}
            >
              <img
                src={
                  item.profile_path
                    ? `${image_api}${item.profile_path}`
                    : "https://media.istockphoto.com/id/587805038/vector/profile-picture-vector-illustration.jpg?s=612x612&w=0&k=20&c=soUW134LXdq5F9LcRtniX--ZOPNQqTdhQJrewQiZsf4="
                }
                alt=""
              />
              <h2>
                {item.character.length < 12
                  ? item.character
                  : item.character.slice(0, 12) + "..."}
              </h2>
              <hr />
              <p>{item.name}</p>
            </div>
          ) : (
            <CardSkeleton skeleton="skeletonActor" />
          )
        )}
      </div>
    </>
  );
};

export default Actors;
