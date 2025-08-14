import { useQuery } from "@tanstack/react-query";
import type { CAST } from "./types";
import { api_tmdb } from "../..";
import { useLanguage } from "../../../constant/language/useLanguage";

const useGetActorsQuery = (type: ACTOR.GetDetailActorReq, id?: string) => {
  const { lang } = useLanguage();
  return useQuery<CAST.GetActorsRes, Error>({
    queryKey: [`/${type}/${id}/credits?language=${lang}`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${type}/${id}/credits?language=${lang}`
      );
      return response?.data;
    },
  });
};
export { useGetActorsQuery };
