import React, { useState } from "react";
import Link from "next/link";
import {
  useCreateTodoMutate,
  listTodoQuery,
  retrieveTodoQuery,
} from "../services/todos";

function QueryTodos() {
  const [todoListData, todoListDataRefetch] = listTodoQuery();

  const [selectedId, setSelectedId] = useState(0);
  const [TodoData] = retrieveTodoQuery(selectedId, {
    keepPreviousData: true,
  });

  const [input, setInput] = useState("");

  const createTodoMutate = useCreateTodoMutate();

  const onCreate = () => {
    createTodoMutate(input);
  };

  return (
    <div>
      QueryTodos
      <div
        role="button"
        onClick={() => {
          todoListDataRefetch();
        }}
      >
        불러오기
      </div>
      <input type="text" onChange={(e) => setInput(e.target.value)} />
      <div role="button" onClick={onCreate}>
        생성하기
      </div>
      {todoListData &&
        todoListData.map((e) => {
          return (
            <div key={e.id} onClick={() => setSelectedId(e.id)}>
              <div>
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
