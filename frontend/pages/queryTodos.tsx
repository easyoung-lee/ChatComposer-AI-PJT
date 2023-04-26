import { useQuery } from "@tanstack/react-query";
import React, { useCallback } from "react";
import { listTodos, retrieveTodos } from "../services/TodosApi";
import axios from "axios";
import Link from "next/link";

function QueryTodos() {
  const {
    data: TodoListData,
    isLoading: TodoListIsLoading,
    fetchStatus,
    status,
    refetch,
  } = useQuery(["todo-list"], listTodos, {
    staleTime: 3 * 60 * 1000,
    enabled: false,
  });
  const useSelectTodo = (todoId: number) =>
    useQuery(["todo-list", todoId], () => retrieveTodos(todoId), {
      staleTime: 3 * 60 * 1000,
    });

  const { data: TodoData, isLoading: TodoIsLoading } = useSelectTodo(1);

  return (
    <div>
      QueryTodos
      <div
        onClick={() => {
          refetch();
        }}
      >
        페치하기
      </div>
      <Link href="/todos">링크</Link>
    </div>
  );
}

export default QueryTodos;
