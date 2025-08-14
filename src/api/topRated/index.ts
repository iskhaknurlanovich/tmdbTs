import { useQuery } from "@tanstack/react-query";
import type { TOPRATED } from "./types";
import { api_tmdb } from "..";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetTopRatedQuery = (select: TOPRATED.GetTopRatedReq) => {
  const { lang } = useLanguage();
  return useQuery<TOPRATED.GetTopRatedRes, Error>({
    queryKey: [`${select}/top_rated?language=${lang}&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `${select}/top_rated?language=${lang}&page=1`
      );

      return response.data;
    },
  });
};
export { useGetTopRatedQuery };
