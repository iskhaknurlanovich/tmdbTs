import { useRef, useState, type FC } from "react";
import scss from "./Carousel.module.scss";
import type { IMovieItem } from "../../../types/schema";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Card from "../card/Card";
import CardSkeleton from "../skeleton/cardSkeleton/CardSkeleton";

interface IProps {
  data: IMovieItem[];
  loader: boolean;
  select: string;
}
const Carousel: FC<IProps> = ({ data, loader, select }) => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const [show, setShow] = useState<number>(0);

  const handleScroll = (direction: string) => {
    const container = carouselRef.current;
    if (!container) return;
    const amount =
      direction === "left"
        ? container.scrollLeft - (container.offsetWidth + 20)
        : container.scrollLeft + (container.offsetWidth + 20);

    container.scrollTo({ left: amount, behavior: "smooth" });
    setShow(amount);
  };

  return (
    <div className={scss.carousel}>
      <div className={scss.wrapper}>
        {show > 0 ? (
          <KeyboardArrowUpIcon
            className={scss.left}
            onClick={() => handleScroll("left")}
          />
        ) : (
          ""
        )}
        {show < 3000 ? (
          <KeyboardArrowUpIcon
            className={scss.right}
            onClick={() => handleScroll("right")}
          />
        ) : (
          ""
        )}
        <div ref={carouselRef} className={scss.carouselItems}>
          {data.length > 0 &&
            data?.map((item, idx) =>
              loader ? (
                <CardSkeleton skeleton="skeleton" />
              ) : (
                <Card item={item} key={idx} select={select} />
              )
            )}
        </div>
      </div>
    </div>
  );
};

export default Carousel;

//!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//   const carouselRef = useRef<any>();
//   const [show, setShow] = useState<number>(0);

//   function scroll(value: string) {
//     const container = carouselRef.current;
//     const amount =
//       value === "left"
//         ? container.scrollLeft - (container.offsetWidth + 20)
//         : container.scrollLeft + (container.offsetWidth + 20);
//     container.scrollTo({ left: amount, behavior: "smooth" });
//     setShow(amount);
//   }

//     <div>
//       <div className={scss.carousel}>
//         <div className={scss.wrapper}>
//           {show > 0 ? (
//             <ArrowBackIcon
//               onClick={() => scroll("left")}
//   className={`${scss.arrow} ${scss.left}`}
//             />
//           ) : (
//             ""
//           )}
//           {show < 3300 ? (
//             <ArrowForwardIcon
//               onClick={() => scroll("rigth")}
//               className={`${scss.arrow} ${scss.right}`}
//             />
//           ) : (
//             ""
//           )}
//           {data?.map((item) => (
//             <Card item={item} />
//           ))}
//         </div>
//       </div>
//     </div>
