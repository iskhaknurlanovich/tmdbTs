import { useQuery } from "@tanstack/react-query";
import type { POPULAR } from "./types";
import { api_tmdb } from "..";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetPopularQuery = (select: POPULAR.GetPopularReq) => {
  const { lang } = useLanguage();
  return useQuery<POPULAR.GetPopularRes, Error>({
    queryKey: [`/${select}/popular?language=${lang}&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${select}/popular?language=${lang}&page=1`
      );
      return response.data;
    },
  });
};
export { useGetPopularQuery };
