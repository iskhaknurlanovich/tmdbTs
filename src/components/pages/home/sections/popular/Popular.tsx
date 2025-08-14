import { useState } from "react";
import { useGetPopularQuery } from "../../../../../api/popular";
import Carousel from "../../../../ui/carousel/Carousel";
import SwitchTab from "../../../../ui/switchTab/SwitchTab";
import scss from "./Popular.module.scss";
import { useLanguage } from "../../../../../constant/language/useLanguage";

const Popular = () => {
  const [select, setSelect] = useState<"movie" | "tv">("movie");
  const { data: dataPopular, isLoading } = useGetPopularQuery(select);
  const data = dataPopular?.results || [];
  const { lang } = useLanguage();
  return (
    <div className="container">
      <div className={scss.popular}>
        <div className={scss.top}>
          <h2>{lang === "en" ? "Popular" : "Популярные"}</h2>
          <SwitchTab setSelect={setSelect} />
        </div>
        <Carousel data={data} loader={isLoading} select={select} />
      </div>
    </div>
  );
};

export default Popular;
