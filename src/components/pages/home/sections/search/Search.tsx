import { useEffect, useRef, useState } from "react";
import { useGetSearchDataQuery } from "../../../../../api/search";
import scss from "./Search.module.scss";
import Card from "../../../../ui/card/Card";
import { useGetPopularQuery } from "../../../../../api/popular";
import type { IMovieItem } from "../../../../../types/schema";
import { useLanguage } from "../../../../../constant/language/useLanguage";

const Search = () => {
  const [value, setValue] = useState<string>("");
  const { data: searchData } = useGetSearchDataQuery(value);
  const { data: popularData } = useGetPopularQuery("movie");
  const { lang } = useLanguage();
  const inputRef = useRef<null | any>(null);
  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className="container">
      <div className={scss.search}>
        <input
          ref={inputRef}
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder={
            lang ? "Names movies/serials" : "Названии фильмов/сериалов"
          }
          value={value}
        />
        <div className={scss.list}>
          {searchData?.results.length
            ? searchData.results.map((item, idx) => (
                <Card item={item} key={idx} select={item.media_type} />
              ))
            : popularData?.results?.map((item: IMovieItem, idx: number) => (
                <Card item={item} key={idx} select={"movie"} />
              ))}
        </div>
      </div>
    </div>
  );
};

export default Search;
