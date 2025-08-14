import type { IMoviesResponse } from "../../types/schema";

namespace TRENDING {
  type GetTrendingRes = IMoviesResponse;
  type GetTrendingReq = "day" | "week";
}
