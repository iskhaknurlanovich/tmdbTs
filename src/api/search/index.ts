import { useQuery } from "@tanstack/react-query";
import type { SEARCH } from "./types";
import { api_tmdb } from "..";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetSearchDataQuery = (value: string) => {
  const { lang } = useLanguage();
  return useQuery<SEARCH.GetSearchRes, Error>({
    queryKey: [
      `/search/multi?query=${value}&include_adult=false&language=${lang}&page=1`,
    ],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/search/multi?query=${value}&include_adult=false&language=${lang}&page=1`
      );

      return response.data;
    },
  });
};
export { useGetSearchDataQuery };
