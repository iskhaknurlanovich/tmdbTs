import { Button } from "antd";
import scss from "./Header.module.scss";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, useNavigate } from "react-router";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useLanguage } from "../../../constant/language/useLanguage";

const Header = () => {
  const navigate = useNavigate();
  const { lang, setLang } = useLanguage();
  return (
    <header id={scss.header}>
      <div className="container">
        <div className={scss.header}>
          <div className={scss.logo}>
            <NavLink to="/">MovieMood</NavLink>
          </div>
          <nav>
            <NavLink
              to="/movies"
              className={({ isActive }) => (isActive ? scss.activeDiv : "")}
            >
              {lang === "en" ? "Movies" : "Фильмы"}
            </NavLink>
            <NavLink
              to="/serials"
              className={({ isActive }) => (isActive ? scss.activeDiv : "")}
            >
              {lang === "en" ? "Serials" : "Сериалы"}
            </NavLink>
            <a>{lang === "en" ? "Collections" : "Коллекции"}</a>
            <a>{lang === "en" ? "Newets" : "Новинки"}</a>
            <a>{lang === "en" ? "Top" : "Топ"}</a>
          </nav>
          <div className={scss.headerLast}>
            <select value={lang} onChange={(e) => setLang(e.target.value)}>
              <option value="en">English</option>
              <option value="ru">Русский</option>
              {/* <option value="ja">Japan</option>
              <option value="ko">Korea</option> */}
            </select>
            <div className={scss.search}>
              <SearchIcon
                className={scss.icon}
                onClick={() => navigate("/search")}
              />
            </div>
            <Button block>
              <AccountCircleIcon className={scss.profileIcon} />
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
