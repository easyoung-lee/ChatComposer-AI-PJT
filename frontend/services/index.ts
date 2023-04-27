import {
  QueryClient,
  QueryKey,
  QueryOptions,
  useQuery,
} from "@tanstack/react-query";
import { AxiosResponse } from "axios";
import { CustomQueryHookReturnType, UseQueryOptionsType } from "../types/query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const QueryKeys = {
  todoKeys: {
    list: () => ["todo-list"] as const,
    retrieve: (TodoId: number) =>
      [...QueryKeys.todoKeys.list(), TodoId] as const,
  },
};

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
