import { QueryClient } from "@tanstack/react-query";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
    },
  },
});

export const useInvalidate = (queryKey: Array<any>, options = {}) =>
  queryClient.invalidateQueries(queryKey, options);

export default queryClient;
