import type { IActorMoviesItem } from "../../../types/schema";

namespace ACTORMOVIES {
  type GetActorMoviesRes = {
    adult: boolean;
    backdrop_path: string | null;
    character: string;
    credit_id: string;
    genre_ids: number[];
    id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string | null;
    release_date: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
  }[];
  type GetActorMoviesReq = void;
}
