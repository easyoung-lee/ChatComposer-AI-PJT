import { useQuery } from "@tanstack/react-query";
import React, { useCallback, useState } from "react";
import { listTodos, retrieveTodos } from "../services/TodosApi";
import axios from "axios";
import Link from "next/link";
import { ListTodoQueryKey, RetrieveTodoQueryKey } from "../services/queryKeys";

function QueryTodos() {
  const {
    data: TodoListData,
    isLoading: TodoListIsLoading,
    fetchStatus,
    status,
    refetch,
  } = useQuery(ListTodoQueryKey(), listTodos, {
    staleTime: 3 * 60 * 1000,
    enabled: false,
  });

  const [selectedId, setSelectedId] = useState(0);
  const { data: TodoData, isLoading: TodoIsLoading } = useQuery(
    RetrieveTodoQueryKey(selectedId),
    () => retrieveTodos(selectedId),
    {
      staleTime: 3 * 60 * 1000,
      keepPreviousData: true,
    },
  );

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
      {TodoListData &&
        TodoListData.data.map((e) => {
          return (
            <div onClick={() => setSelectedId(e.id)}>
              <div key={e.id}>
                {e.id} / {e.text} / {e.completed.toString()}
              </div>
            </div>
          );
        })}
      {TodoData ? (
        <div>
          <div>선택된 데이터</div>
          <div>{TodoData.data.text}</div>
          <div>{TodoData.data.completed}</div>
        </div>
      ) : (
        <></>
      )}
      <Link href="/todos">리코일 전용으로 이동 링크</Link>
    </div>
  );
}

export default QueryTodos;
