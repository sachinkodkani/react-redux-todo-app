import { VisibilityFilters } from "./actions/actionTypes";

export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));


export const getTodosByVisibilityFilter = (store, filter) => {
  const allTodos = getTodos(store);
  switch (filter) {
    case VisibilityFilters.SHOW_COMPLETED:
    return allTodos.filter(todo => todo.completed);
    case VisibilityFilters.SHOW_ACTIVE:
      return allTodos.filter(todo => !todo.completed);
    case VisibilityFilters.SHOW_ALL:
    default:
      return allTodos;
  }
};
