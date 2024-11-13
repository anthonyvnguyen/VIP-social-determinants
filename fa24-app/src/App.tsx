import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import { Provider } from "./components/ui/provider";
import { ChakraProvider, defaultSystem, Heading } from "@chakra-ui/react";
import system from "./theme";
import Navbar from "./pages/Navbar";
import { Button } from "./components/ui/button";

function App() {
  return (
    <>
      <ChakraProvider value={system}>
        <Navbar />
        <Home />
      </ChakraProvider>
    </>
  );
}

export default App;
