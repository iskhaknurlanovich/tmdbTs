import type { IMovieItem, IMovieResponse } from "../../types/schema";

namespace SEARCH {
  type GetSearchRes = IMovieResponse;
  type GetSearchReq = IMovieItem[];
}
