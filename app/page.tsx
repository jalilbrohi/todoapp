"use client";
import React from "react";
import TodoByJalil from "./todobyjalil";
import { ChakraProvider, Heading } from "@chakra-ui/react";
function home() {
  return (
    <ChakraProvider>
      <TodoByJalil />
    </ChakraProvider>
  );
}

export default home;
