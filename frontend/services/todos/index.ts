import { useMutation, useQuery } from "@tanstack/react-query";
import TodosApi from "../TodosApi";
import { Todo } from "../../types/todos";
import { CustomQueryHookType } from "../../types/query";
import { getMutate, getQueryResult, useInvalidate } from "..";
import QueryKeys from "../QueryKeys";

export const listTodoQuery: CustomQueryHookType<null, Array<Todo>> = (
  _,
  options = {},
) => {
  const queryKey = QueryKeys.todos.list();
  const getQueryFn = () => {
    return () => TodosApi.get("");
  };

  return getQueryResult(queryKey, getQueryFn(), options);
};

export const retrieveTodoQuery: CustomQueryHookType<number, Todo> = (
  selectedId,
  options = {},
) => {
  const queryKey = QueryKeys.todos.retrieve(selectedId);
  const getQueryFn = (id: number) => {
    return () => TodosApi.get(`?id=${id}`);
  };

  return getQueryResult(queryKey, getQueryFn(selectedId), options);
};

export const useCreateTodoMutate = () => {
  const mutationFn = (text: string) => TodosApi.post("", { text });
  const queryKey = QueryKeys.todos.list();

  return getMutate(queryKey, mutationFn);
};

export const useUpdateTodoMutate = () => {
  const mutationFn = (todo: Todo) => TodosApi.put("", { ...todo });
  const queryKey = QueryKeys.todos.list();

  return getMutate(queryKey, mutationFn);
};

export const useDestoryTodoMutate = () => {
  const mutationFn = (id: number) => TodosApi.delete(`?id=${id}`);
  const queryKey = QueryKeys.todos.list();

  return getMutate(queryKey, mutationFn);
};

const todosQuery = {
  listTodoQuery,
  retrieveTodoQuery,
  useCreateTodoMutate,
  useUpdateTodoMutate,
  useDestoryTodoMutate,
};

export default todosQuery;
