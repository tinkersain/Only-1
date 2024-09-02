import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import axios from "axios";
axios.defaults.baseURL = "http://localhost:8080";
import { ChakraProvider } from "@chakra-ui/react";

import Login from "./components//Login";

function App() {
  return (
    <ChakraProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
