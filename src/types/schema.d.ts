export type IMovieResponse = {
  id: number;
  results: IMovieItem[];
};
export type IMovieItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  original_name: string;
  media_type: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  runtime: string;
  number_of_episodes: string;
  tagline: string;
  first_air_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export type IVideoResponse = {
  id: number;
  results: IVideoItem[];
};
export type IVideoItem = {
  id: string;
  iso_639_1: string;
  iso_3166_1: string;
  key: string;
  name: string;
  official: boolean;
  published_at: string;
  site: string;
  size: number;
  type: string;
};
