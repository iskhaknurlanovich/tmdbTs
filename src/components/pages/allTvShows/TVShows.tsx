import scss from "./TVShows.module.scss";
import Card from "../../ui/card/Card";
import { useState } from "react";
import { useGetAllTVShowsQuery } from "../../../api/allTvShows";
import { useLanguage } from "../../../constant/language/useLanguage";
import Loader from "../../ui/loading/Loader";

const TVShows = () => {
  const { data: allData, isLoading } = useGetAllTVShowsQuery("tv");
  const [show, setShow] = useState<number>(52);
  const { lang } = useLanguage();
  return (
    <div className={scss.tv}>
      {!isLoading ? (
        <>
          <div className={scss.list}>
            {allData?.slice(0, show).map((item, idx) => (
              <Card item={item} select="tv" key={idx} />
            ))}
          </div>
          <div className={scss.bottom} onClick={() => setShow(show + 32)}>
            {lang === "en" ? "Show More" : "Смотреть больше"}
          </div>
        </>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default TVShows;
