import { Button } from "react-bootstrap";
import React from "react";
import { Form } from "react-bootstrap";
import { useState } from "react";

export const AddTodo = ({ addTodo }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!title || !desc) {
      alert("Title or Description cannot be left blank");
    } else {
      addTodo(title, desc);
      setTitle();
      setDesc();
    }
  };

  return (
    <div className="container">
      <h3 className="my-5">Add A ToDo</h3>
      <Form onSubmit={submit}>
        <Form.Group>
          <Form.Label>Title</Form.Label>
          <Form.Control
            value={title}
            id="title"
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Enter Title"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            value={desc}
            id="desc"
            type="desc"
            onChange={(e) => setDesc(e.target.value)}
            placeholder="Description"
          />
        </Form.Group>

        <Button className="btn-sm btn-success" variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};
