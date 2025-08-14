import { useQuery } from "@tanstack/react-query";
import { api_tmdb } from "../..";
import type { VIDEO } from "./types";

const useGetMoviesTreilerQuery = (select: string, id?: number) => {
  return useQuery<VIDEO.GetVideoRes, Error>({
    queryKey: [`/${select}/${id}/videos?language=en-US&page=1`],
    queryFn: async () => {
      const response = await api_tmdb.get(
        `/${select}/${id}/videos?language=en-US&page=1`
      );

      return response.data;
    },
  });
};
export { useGetMoviesTreilerQuery };
