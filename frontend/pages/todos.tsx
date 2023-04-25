import React from "react";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";
import { removeTodo, todoListState, toggleTodo } from "../store/atoms";
import TodoItemCreator from "../components/TodoItemCreator";

function Todos() {
  //useRecoilValue로 상태와 setRecoilValue를 가져올 수 있다.

  // useRecoilState, useRecoilValue, useSetRecoilState의 차이.
  // const todoList = useRecoilValue(todoListState);
  // const setTodoList = useSetRecoilState(todoListState);
  const [todoList, setTodoList] = useRecoilState(todoListState);

  return (
    <div>
      <div>todos</div>
      <TodoItemCreator />

      {todoList.map((todoItem) => (
        <div key={todoItem.id}>
          <p role="button" onClick={() => toggleTodo(todoItem, setTodoList)}>
            {todoItem.text}
            {todoItem.completed ? "완료됨" : ""}
          </p>
          <div role="button" onClick={() => removeTodo(todoItem, setTodoList)}>
            삭제하기
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
