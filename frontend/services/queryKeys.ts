export const ListTodoQueryKey = () => ["todo-list"];
export const RetrieveTodoQueryKey = (todoId: number) => [
  ...ListTodoQueryKey(),
  todoId,
];
