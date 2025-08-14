import type { IMoviesResponse } from "../../types/schema";

namespace TOPRATED {
  type GetTopRatedRes = IMoviesResponse;
  type GetTopRatedReq = "movie" | "tv";
}
