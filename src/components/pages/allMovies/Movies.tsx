import scss from "./Movies.module.scss";
import { useGetAllMoviesQuery } from "../../../api/allMovies";
import Card from "../../ui/card/Card";
import { useState } from "react";
import { useLanguage } from "../../../constant/language/useLanguage";
import Loader from "../../ui/loading/Loader";

const Movies = () => {
  const { data: allData, isLoading } = useGetAllMoviesQuery("movie");
  const [show, setShow] = useState<number>(52);
  const { lang } = useLanguage();
  return (
    <div className={scss.movies}>
      {!isLoading ? (
        <>
          <div className={scss.list}>
            {allData?.slice(0, show)?.map((item, idx) => (
              <Card item={item} select="movie" key={idx} />
            ))}
          </div>
          <div className={scss.bottom} onClick={() => setShow(show + 30)}>
            {lang === "en" ? "Show More" : "Смотреть больше"}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default Movies;
