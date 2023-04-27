export type CustomQueryHookReturnType<TData = any> = [
  TData,
  <TPageData>(
    options?: RefetchOptions & RefetchQueryFilters<TPageData>,
  ) => Promise<QueryObserverResult<AxiosResponse<any, any>, unknown>>,
  UseQueryResult<TData, TError>,
];

export type CustomQueryHookType<TParams = unknown, TData = any> = (
  params?: TParams,
  options?: Omit<
    UseQueryOptions<TQueryFnData, TError, TData, TQueryKey>,
    "queryKey" | "queryFn" | "initialData"
  > & { initialData?: () => undefined },
) => CustomQueryHookReturnType<TData>;
