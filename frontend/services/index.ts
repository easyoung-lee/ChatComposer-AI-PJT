import {
  QueryClient,
  QueryKey,
  useMutation,
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

export const useInvalidate = (queryKey: QueryKey, options = {}) =>
  queryClient.invalidateQueries(queryKey, options);

export const getQueryResult = (
  queryKey: QueryKey,
  queryFn: (...args: any[]) => Promise<AxiosResponse<any, any>>,
  options?: UseQueryOptionsType,
): CustomQueryHookReturnType => {
  const query = useQuery(queryKey, queryFn, options);
  return [query.data?.data, query.refetch, query];
};

export const getMutate = (
  queryKey: QueryKey,
  mutationFn: (...args: any[]) => Promise<AxiosResponse<any, any>>,
) => {
  const mutation = useMutation(mutationFn, {
    onSuccess: () => {
      useInvalidate(queryKey);
    },
  });
  return mutation.mutate;
};

export default queryClient;
