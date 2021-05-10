import "./App.css";
import Header from "./components/Header";
import { Footer } from "./components/Footer";
import { About } from "../src/components/About";
// import {TodoItems} from "./components/TodoItems";
import { Todos } from "./components/Todos";
import { useState, useEffect } from "react";
import { AddTodo } from "./components/AddTodo";
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  let initTodo;
  if (localStorage.getItem("todos") === null) {
    initTodo = [];
  } else {
    initTodo = JSON.parse(localStorage.getItem("todos"));
  }
  const onDelete = (todo) => {
    console.log("I am OnDelete", todo);
    setTodos(
      todos.filter((e) => {
        return e !== todo;
      })
    );
    localStorage.setItem("todos", JSON.stringify(todos));
  };

  const addTodo = (title, desc) => {
    console.log("Add todo", title, desc);
    let sno;
    if (todos.length === 0) {
      sno = 0;
    } else {
      sno = todos[todos.length - 1].sno + 1;
    }

    const myTodo = {
      sno: sno,
      title: title,
      desc: desc,
    };
    setTodos([...todos, myTodo]);
    console.log(myTodo);
  };

  const [todos, setTodos] = useState([initTodo]);
  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  return (
    <div className="App">
      <Router>
        <Header title="My Todos List" searchbar={false} />
        <Switch>
          <Route
            exact
            path="/"
            render={() => {
              return (
                <>
                  <AddTodo addTodo={addTodo} />
                  <Todos todos={todos} onDelete={onDelete} />
                </>
              );
            }}
          ></Route>
          <Route exact path="/about">
            <About />
          </Route>
        </Switch>

        <Footer />
      </Router>
    </div>
  );
}

export default App;

// {
//   sno: 1,
//   title: "Go to the market",
//   desc: "Go to the market to fetch bananas",
// },
// {
//   sno: 2,
//   title: "Go to the mall",
//   desc: "Go to the market to fetch groceries",
// },
// {
//   sno: 3,
//   title: "Go to the ground",
//   desc: "Go to the market to play volleyball",
// },
