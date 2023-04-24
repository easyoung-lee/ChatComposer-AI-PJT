import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { removeTodo, todoListState, toggleTodo } from "../store/atoms";
import TodoItemCreator from "../components/todoItemCreator";

function Todos() {
  //useRecoilValue로 상태를 가져올 수 있다.
  const todoList = useRecoilValue(todoListState);
  const setTodoList = useSetRecoilState(todoListState);
  return (
    <div>
      <div>todos</div>
      <TodoItemCreator />
      {todoList.map((todoItem) => (
        <div key={todoItem.id}>
          <p onClick={() => toggleTodo(todoItem, setTodoList)}>{todoItem}</p>
          <div role="button" onClick={() => removeTodo(todoItem, setTodoList)}>
            삭제하기
          </div>
        </div>
      ))}
    </div>
  );
}

export default Todos;
