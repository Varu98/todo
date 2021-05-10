import React from "react";
import { TodoItems } from "./TodoItems";

export const Todos = (props) => {
  let astyle = {
    align: "left",
    margin: "auto",
    text: "left",
  };
  return (
    <div className="container">
      <h3 style={astyle} className=" my-3">
        Todos List
      </h3>
      {props.todos.length === 0
        ? "No Todos To Display"
        : props.todos.map((todo) => {
            return (
              <div className="container my-5">
                {" "}
                <TodoItems
                  todo={todo}
                  key={todo.sno}
                  onDelete={props.onDelete}
                />
                <hr />
              </div>
            );
          })}
    </div>
  );
};
