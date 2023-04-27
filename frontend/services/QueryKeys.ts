const QueryKeys = {
  todos: {
    list: () => ["todo-list"] as const,
    retrieve: (TodoId: number) => [...QueryKeys.todos.list(), TodoId] as const,
  },
};

export default QueryKeys;
