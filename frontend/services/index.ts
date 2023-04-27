import { QueryClient, QueryKey, useQuery } from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { CustomQueryHookReturnType, UseQueryOptionsType } from "../types/query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const getQueryResult = (
  queryKey: QueryKey,
  queryFn: () => Promise<AxiosResponse<any, any>>,
  options?: UseQueryOptionsType,
): CustomQueryHookReturnType => {
  const query = useQuery(queryKey, queryFn, options);
  return [query.data.data, query.refetch, query];
};

export const useInvalidate = (queryKey: Array<any>, options = {}) =>
  queryClient.invalidateQueries(queryKey, options);

export default queryClient;
