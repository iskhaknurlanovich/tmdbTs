import { useParams } from "react-router-dom";
import { type FC } from "react";
import { useGetMoviesTreilerQuery } from "../../../../../api/detail/video";
import type { IVideoItem } from "../../../../../types/schema";
interface IProps {
  setOff: (modalVideo: boolean) => void;
  type?: string | undefined;
}
const Video: FC<IProps> = ({ setOff, type }) => {
  const { id } = useParams();
  const { data: treilerData } = useGetMoviesTreilerQuery(
    type != undefined ? type : "",
    Number(id)
  );

  const trailer = treilerData?.results.find(
    (item: IVideoItem) => item.type === "Trailer" && item.site === "YouTube"
  );
  return (
    <div style={{ width: "100%", maxWidth: "700px" }}>
      <iframe
        src={`https://www.youtube.com/embed/${
          trailer == undefined || trailer?.key
        }`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Movie Trailer"
        style={{ width: "100%" }}
      />
      <button
        style={{
          color: "white",
          borderRadius: "0 0 10px 10px",
          padding: "10px",
          width: "100%",
          background: "red",
          border: "none",
        }}
        onClick={() => setOff(false)}
      >
        Escape
      </button>
    </div>
  );
};

export default Video;
