import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";
import type { ALLMOVIES } from "./types";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetAllMoviesQuery = (select: ALLMOVIES.GetAllMoviesReq) => {
  const { lang } = useLanguage();
  return useQuery<ALLMOVIES.GetAllMoviesRes[], Error>({
    queryKey: [`/${select}/popular?language=${lang}`],
    queryFn: async () => {
      const allMovies = [];

      for (let i = 1; i <= 10; i++) {
        const response = await api_tmdb.get(
          `/${select}/popular?language=${lang}&page=${i}`
        );
        allMovies.push(...response.data.results);
      }

      return allMovies;
    },
  });
};

export { useGetAllMoviesQuery };
