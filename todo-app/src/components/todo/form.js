import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import useForm from "../../hooks/useform";

const TodoForm = (props) => {

  const [handleInputChange,handleSubmit,item] = useForm(props)

  return (
    <>
      <Container>
        <h3>Add Item</h3>
        <Form onSubmit={handleSubmit}>
          <label>
            <span>To Do Item</span>
            <input
              name="text"
              placeholder="Add To Do List Item"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Difficulty Rating</span>
            <input
              defaultValue="1"
              type="range"
              min="1"
              max="5"
              name="difficulty"
              onChange={handleInputChange}
            />
          </label>
          <label>
            <span>Assigned To</span>
            <input
              type="text"
              name="assignee"
              placeholder="Assigned To"
              onChange={handleInputChange}
            />
          </label>
          <Button variant="primary" type="submit">
            Add Item
          </Button>
        </Form>
      </Container>
    </>
  );
};

export default TodoForm;
