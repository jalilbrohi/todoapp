"use client";
import { Heading, Box, Flex, Button, Input, HStack } from "@chakra-ui/react";
import React, { useState } from "react";

function TodoByJalil() {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([
    { todoText: "Welcome to my Todo App", completed: true },
  ]);

  //check box active & inactive
  const onClickHandler = (tick: any) => {
    console.log(tick);
    const newTodo = todos.map((todo) => {
      console.log(todos);
      if (todo.todoText == tick.todoText) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    console.log(newTodo);
    setTodos(newTodo);
    //check box ended here
  };

  // add new todo in ui
  const addTodo = () => {
    const newTodo = { todoText: todo, completed: false };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
    setTodo(" ");
    //add new todo in ui ended here
  };
  //delete todo started
  const deleteTodo = (d: any) => {
    const newTodos = todos.filter((todo) => {
      if (todo.todoText == d.todoText) return false;
      return true;
    });
    console.log("old todo", todos, "New Todo", newTodos);
    setTodos(newTodos);
  };
  return (
    <>
      <Heading textAlign={"center"} pt={"100px"}>
        Todo Application
      </Heading>
      <Box textAlign={"center"} mx={"20px"} maxW="auto" pt={"100px"}>
        <Input
          w={"250px"}
          m={"20px"}
          type="text"
          placeholder="Enter your task"
          value={todo}
          onChange={(e) => {
            setTodo(e.target.value);
          }}
        />

        <Button
          onClick={addTodo}
          colorScheme="teal"
          variant={"solid"}
          w={"180px"}
          h={"42.5px"}
        >
          Add Task
        </Button>
        <ul>
          {todos.map((e) => {
            return (
              <li
                style={{
                  color: e.completed ? "green" : "red",
                  fontStyle: "oblique ",
                  listStyle: "none",
                }}
                key={e.todoText}
              >
                <input
                  type="checkbox"
                  checked={e.completed}
                  onChange={() => {
                    onClickHandler(e);
                  }}
                />
                {e.todoText}
                <HStack>
                  <Button
                    w={"180px"}
                    h={"42.5px"}
                    mx={"600px"}
                    mt={"20px"}
                    onClick={() => {
                      deleteTodo(e);
                    }}
                  >
                    Delete🐬
                  </Button>
                </HStack>
              </li>
            );
          })}
        </ul>
      </Box>
    </>
  );
}

export default TodoByJalil;
