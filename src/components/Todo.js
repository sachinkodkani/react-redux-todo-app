import React from "react";
import cx from "classnames";
import { connect } from "react-redux";
import { toggleTodo } from "../redux/actions/actions";

const Todo = props => {
  const { todo, toggleTodo } = props;
  return (
    <li className="todo-item" onClick={() => toggleTodo(todo.id)}>
      {todo && todo.completed ? "👌" : "👋"}{" "}
      <span
        className={cx(
          "todo-item__text",
          todo && todo.completed && "todo-item__text--completed"
        )}
      >
        {todo && todo.text}
      </span>
    </li>
  );
};

export default connect(
  null,
  { toggleTodo }
)(Todo);
