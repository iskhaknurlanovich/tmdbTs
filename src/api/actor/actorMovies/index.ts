import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "../..";
import type { ACTORMOVIES } from "./types";
import { useLanguage } from "../../../constant/language/useLanguage";

const useGetActorMoviesQuery = (id?: string) => {
  const { lang } = useLanguage();
  return useQuery<ACTORMOVIES.GetActorMoviesRes, Error>({
    queryKey: [`actor-movie-credits-${id}`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/person/${id}/movie_credits?language=${lang}`
      );
      return response.data.cast;
    },
  });
};

export { useGetActorMoviesQuery };
