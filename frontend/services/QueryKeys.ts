const QueryKeys = {
  todos: {
    list: () => ["todo-list"] as const,
    retrieve: (TodoId: number) => [...QueryKeys.todos.list(), TodoId] as const,
  },
  musics: {
    list: () => ["movies"] as const,
    retrieve: (musicId: number) =>
      [...QueryKeys.musics.list(), musicId] as const,
    tracks: {
      list: () => [...QueryKeys.musics.list(), "tracks"] as const,
    },
  },
};

export default QueryKeys;
