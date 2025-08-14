import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";
import type { ALLTVSHOWS } from "./types";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetAllTVShowsQuery = (select: ALLTVSHOWS.GetAllTvShowsReq) => {
  const { lang } = useLanguage();
  return useQuery<ALLTVSHOWS.GetAllTvShowsRes[], Error>({
    queryKey: [`/${select}/popular?language=${lang}`],
    queryFn: async () => {
      const allTv = [];

      for (let i = 1; i <= 10; i++) {
        const response = await api_tmdb.get(
          `/${select}/popular?language=${lang}&page=${i}`
        );
        allTv.push(...response.data.results);
      }

      return allTv;
    },
  });
};

export { useGetAllTVShowsQuery };
