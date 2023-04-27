import { useQuery } from "@tanstack/react-query";
import TodosApi from "../TodosApi";
import { Todo } from "../../types/todos";
import { CustomQueryHookType } from "../../types/query";
import { getQueryResult } from "..";
import QueryKeys from "../QueryKeys";

export const useListTodoQuery: CustomQueryHookType<null, Array<Todo>> = (
  _,
  options = {},
) => {
  const queryKey = QueryKeys.todoKeys.list();
  const getQueryFn = () => {
    return () => TodosApi.get("");
  };

  return getQueryResult(queryKey, getQueryFn(), options);
};

export const useRetrieveTodoQuery: CustomQueryHookType<number, Todo> = (
  selectedId,
  options = {},
) => {
  const queryKey = QueryKeys.todoKeys.retrieve(selectedId);
  const getQueryFn = (id: number) => {
    return () => TodosApi.get(`?id=${id}`);
  };

  return getQueryResult(queryKey, getQueryFn(selectedId), options);
};

const todosQuery = {
  useListTodoQuery,
  useRetrieveTodoQuery,
};

export default todosQuery;
