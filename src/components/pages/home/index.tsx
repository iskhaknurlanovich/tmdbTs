import Popular from "./sections/popular/Popular";
import Trending from "./sections/trending/Trending";
import TopRated from "./sections/topRated/TopRated";
import Welcome from "./sections/Welcome";

const HomePage = () => {
  return (
    <div>
      <Welcome />
      <Popular />
      <Trending />
      <TopRated />
    </div>
  );
};

export default HomePage;
