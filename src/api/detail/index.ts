import { useQuery } from "@tanstack/react-query";
import type { DETAIL } from "./types";
import { api_tmdb } from "..";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetDetailInfoQuery = (
  name: DETAIL.GetDetailReq,
  id: string | undefined
) => {
  const { lang } = useLanguage();
  return useQuery<DETAIL.GetDetailRes, Error>({
    queryKey: [`/${name}/${id}?language=${lang}&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${name}/${id}?language=${lang}&page=1`
      );

      return response.data;
    },
  });
};
export { useGetDetailInfoQuery };
