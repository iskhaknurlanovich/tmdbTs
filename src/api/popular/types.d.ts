import type { IMoviesResponse } from "../../types/schema";

namespace POPULAR {
  type GetPopularRes = IMoviesResponse;
  type GetPopularReq = "movie" | "tv";
}
