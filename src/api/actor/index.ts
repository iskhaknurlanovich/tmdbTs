import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "..";
import { useLanguage } from "../../constant/language/useLanguage";

const useGetDetailActorQuery = (id?: string) => {
  const { lang } = useLanguage();
  return useQuery<ACTOR.GetDetailActorRes, Error>({
    queryKey: [`/person/${id}?language=${lang}`],
    queryFn: async () => {
      const response = await api_tmdb.get(`/person/${id}?language=${lang}`);

      return response.data;
    },
  });
};

export { useGetDetailActorQuery };
