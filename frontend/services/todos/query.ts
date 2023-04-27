import { useQuery } from "@tanstack/react-query";
import TodosApi from "../TodosApi";
import { Todo } from "../../types/todos";
import { CustomQueryHookType } from "../../types/query";
import { ListTodoQueryKey, RetrieveTodoQueryKey } from "./key";

export const useListTodoQuery: CustomQueryHookType<null, Array<Todo>> = (
  _,
  options = {},
) => {
  const listTodos = () => TodosApi.get("");
  const query = useQuery(ListTodoQueryKey(), () => listTodos(), options);
  return [query.data.data, query.refetch, query];
};

export const useRetrieveTodoQuery: CustomQueryHookType<number, Todo> = (
  selectedId,
  options = {},
) => {
  const retrieveTodos = (id: number) => TodosApi.get(`?id=${id}`);
  const query = useQuery(
    RetrieveTodoQueryKey(selectedId),
    () => retrieveTodos(selectedId),
    options,
  );
  return [query.data.data, query.refetch, query];
};
