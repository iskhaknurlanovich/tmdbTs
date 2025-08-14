import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";
import type { TRENDING } from "./types";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetTrendingQuery = (select: TRENDING.GetTrendingReq) => {
  const { lang } = useLanguage();
  return useQuery<TRENDING.GetTrendingRes, Error>({
    queryKey: [`/trending/movie/${select}?language=${lang}&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/trending/movie/${select}?language=${lang}&page=1`
      );
      return response.data;
    },
  });
};
export { useGetTrendingQuery };
