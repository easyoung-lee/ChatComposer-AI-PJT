import { atom, useSetRecoilState } from "recoil";

//atom({key:, default:})로 새로운 아톰을 만들 수 있다.
// 이때 key는 각 아톰을 구별하는 고유한 식별자이다.
// default는 initial state를 의미한다.
export const todoListState = atom({
  key: "Todos",
  default: [],
});

// const setTodoList = useSetRecoilState(todoListState);

export const toggleTodo = (data, setTodoList) => {
  setTodoList((todoList) =>
    todoList.map((todo) =>
      todo.id === data.id ? { ...data, completed: !data.completed } : todo,
    ),
  );
};

export const removeTodo = (data, setTodoList) => {
  setTodoList((todoList) => todoList.filter((todo) => todo.id !== data.id));
};
