import { createBrowserRouter } from "react-router";
import LayoutSite from "../components/layout/LayoutSite";
import HomePage from "../components/pages/home";
import Popular from "../components/pages/home/sections/popular/Popular";
import DetailPage from "../components/ui/details/DetailPage";
import ActorDetail from "../components/pages/home/sections/actorDetail/ActorDetail";
import Search from "../components/pages/home/sections/search/Search";
import Movies from "../components/pages/allMovies/Movies";
import TVShows from "../components/pages/allTvShows/TVShows";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutSite />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/popular",
        element: <Popular />,
      },
      {
        path: "/details/:type/:id",
        element: <DetailPage />,
      },
      {
        path: "/:type/actor/detail/:id",
        element: <ActorDetail />,
      },
      {
        path: "/search",
        element: <Search />,
      },
      {
        path: "/movies",
        element: <Movies />,
      },
      {
        path: "/serials",
        element: <TVShows />,
      },
    ],
  },
]);
