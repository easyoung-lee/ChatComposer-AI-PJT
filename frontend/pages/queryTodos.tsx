import React, { useState } from "react";
import Link from "next/link";
import {
  useListTodoQuery,
  useRetrieveTodoQuery,
} from "../services/todos/query";

function QueryTodos() {
  const [todoListData, todoListDataRefetch] = useListTodoQuery();

  const [selectedId, setSelectedId] = useState(0);
  const [TodoData] = useRetrieveTodoQuery(selectedId, {
    keepPreviousData: true,
  });

  return (
    <div>
      QueryTodos
      <div
        onClick={() => {
          todoListDataRefetch();
        }}
      >
        페치하기
      </div>
      {todoListData &&
        todoListData.map((e) => {
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
          <div>{TodoData.text}</div>
          <div>{TodoData.completed}</div>
        </div>
      ) : (
        <></>
      )}
      <Link href="/todos">리코일 전용으로 이동 링크</Link>
    </div>
  );
}

export default QueryTodos;
