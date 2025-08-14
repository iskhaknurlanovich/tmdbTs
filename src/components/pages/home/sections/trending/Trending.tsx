import { useState } from "react";
import { useGetTrendingQuery } from "../../../../../api/trending";
import Carousel from "../../../../ui/carousel/Carousel";
import scss from "./Trending.module.scss";
import { useLanguage } from "../../../../../constant/language/useLanguage";

const Trending = () => {
  const [select, setSelect] = useState<"day" | "week">("day");
  const [activeTab, setActiveTab] = useState<number>(0);
  const { data: dataTrending, isLoading } = useGetTrendingQuery(select);
  const data = dataTrending?.results || [];
  const { lang } = useLanguage();
  return (
    <div className="container">
      <div className={scss.trending}>
        <div className={scss.top}>
          <h2>{lang === "en" ? "Trending" : "Трендовые"}</h2>
          <div className={scss.switchTabs}>
            <button
              className={activeTab === 0 ? scss.active : ""}
              onClick={() => {
                setSelect("day");
                setActiveTab(0);
              }}
            >
              <span>{lang === "en" ? "Day" : "День"}</span>
            </button>
            <button
              className={activeTab === 1 ? scss.active : ""}
              onClick={() => {
                setSelect("week");
                setActiveTab(1);
              }}
            >
              <span>{lang === "en" ? "Week" : "Неделья"}</span>
            </button>
          </div>
        </div>
        <Carousel data={data} loader={isLoading} select={"movie"} />
      </div>
    </div>
  );
};

export default Trending;
