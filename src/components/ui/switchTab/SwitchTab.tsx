import { useState, type FC } from "react";
import scss from "./SwitchTab.module.scss";
import { useLanguage } from "../../../constant/language/useLanguage";
interface IProps {
  setSelect: (select: any) => void;
}
const SwitchTab: FC<IProps> = ({ setSelect }) => {
  const [activeTab, setActiveTab] = useState<number>(0);
  const { lang } = useLanguage();
  return (
    <div className={scss.switchTabs}>
      <button
        className={activeTab === 0 ? scss.active : ""}
        onClick={() => {
          setSelect("movie");
          setActiveTab(0);
        }}
      >
        <span>{lang === "en" ? "Movie" : "Фильмы"}</span>
      </button>
      <button
        className={activeTab === 1 ? scss.active : ""}
        onClick={() => {
          setSelect("tv");
          setActiveTab(1);
        }}
      >
        <span>{lang === "en" ? "Tv" : "Сериалы"}</span>
      </button>
    </div>
  );
};

export default SwitchTab;
