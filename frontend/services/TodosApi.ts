import axios, { AxiosResponse } from "axios";

export interface Todo {
  id: number;
  text: string;
  completed: boolean;
}

const TodosApi = axios.create({
  baseURL: "http://localhost:3000/api/todos/",
});

export const listTodos = () =>
  TodosApi.get("").then((res) => {
    console.log(res);
    return res as AxiosResponse<Array<Todo>>;
  });

export const retrieveTodos = (id: number) =>
  TodosApi.get(`?id=${id}`).then((res) => {
    console.log(`?id=${id}`);
    console.log(res);
    return res as AxiosResponse<Todo>;
  });

export default TodosApi;
