import { useState } from "react";
import { useGetTopRatedQuery } from "../../../../../api/topRated";
import Carousel from "../../../../ui/carousel/Carousel";
import scss from "./TopRated.module.scss";
import SwitchTab from "../../../../ui/switchTab/SwitchTab";
import { useLanguage } from "../../../../../constant/language/useLanguage";

const TopRated = () => {
  const [select, setSelect] = useState<"movie" | "tv">("movie");
  const { data: dataTopRated, isLoading } = useGetTopRatedQuery(select);
  const data = dataTopRated?.results || [];
  const { lang } = useLanguage();
  return (
    <div className="container">
      <div className={scss.topRated}>
        <div className={scss.top}>
          <h2>{lang === "en" ? "Top Rated" : "Топ Рейтинг"}</h2>
          <SwitchTab setSelect={setSelect} />
        </div>
        <Carousel data={data} loader={isLoading} select={select} />
      </div>
    </div>
  );
};

export default TopRated;
