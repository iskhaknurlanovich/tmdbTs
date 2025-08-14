import Actors from "./cast/Actors";
import DetailBanner from "./detailBanner/DetailBanner";

const DetailPage = () => {
  window.scrollTo(0, 0);
  return (
    <div>
      <DetailBanner />
      <Actors />
    </div>
  );
};

export default DetailPage;
