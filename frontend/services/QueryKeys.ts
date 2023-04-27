const QueryKeys = {
  todoKeys: {
    list: () => ["todo-list"] as const,
    retrieve: (TodoId: number) =>
      [...QueryKeys.todoKeys.list(), TodoId] as const,
  },
};

export default QueryKeys;
