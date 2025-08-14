import { useMemo, useState } from "react";
import { useGetMoviesTreilerQuery } from "../../../../api/detail/video";
import { useGetPopularQuery } from "../../../../api/popular";
import type { IMovieItem, IVideoItem } from "../../../../types/schema";
import scss from "./Welcome.module.scss";
import HomeText from "../../../ui/homeText/HomeText";

const Welcome = () => {
  const { data: popularData } = useGetPopularQuery("movie");
  const [show, setShow] = useState(250);

  const banner = popularData?.results;

  const randomIndex: IMovieItem | undefined = useMemo(() => {
    if (!banner || banner.length === 0) return;
    const randomNum = Math.floor(Math.random() * 19);
    return banner[randomNum];
  }, [banner]);

  const { data: treiler } = useGetMoviesTreilerQuery("movie", randomIndex?.id);

  const trailer = treiler?.results.find(
    (item: IVideoItem) => item.type === "Trailer" && item.site === "YouTube"
  );

  return (
    <div className={scss.banner}>
      {trailer && (
        <iframe
          src={`https://www.youtube.com/embed/${trailer.key}?autoplay=1&loop=1&playlist=${trailer.key}&controls=0&modestbranding=1&rel=0&vq=hd1080&mute=1`}
          allow="autoplay; encrypted-media"
          frameBorder="0"
          className={scss.background}
        />
      )}

      <HomeText randomIndex={randomIndex} show={show} setShow={setShow} />
    </div>
  );
};

export default Welcome;
