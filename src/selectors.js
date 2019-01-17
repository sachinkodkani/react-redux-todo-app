import { VisibilityFilters } from "./redux/actions/actionTypes";

export const getTodoList = store =>
  store && store.todos ? store.todos.allIds : [];

export const getTodoById = (store, id) =>
  store && store.todos && store.todos.byIds
    ? { ...store.todos.byIds[id], id }
    : {};

export const getTodos = store =>
  getTodoList(store).map(id => getTodoById(store, id));

const getTodosByStatus = (todos, status) =>
  todos.map(todo => {
    return todo.completed === status ? todo : {};
  });

export const getTodosByVisibilityFilter = (store, filter) => {
  switch (filter) {
    case VisibilityFilters.SHOW_ALL:
      return getTodos(store);
    case VisibilityFilters.SHOW_ACTIVE:
      return getTodosByStatus(getTodos(store), false);
    case VisibilityFilters.SHOW_COMPLETED:
      return getTodosByStatus(getTodos(store), true);
    default:
      return {};
  }
};
