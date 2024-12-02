import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Map from "./pages/Map";
import { Provider } from "./components/ui/provider";
import { ChakraProvider, defaultSystem, Heading } from "@chakra-ui/react";
import system from "./theme";
import Navbar from "./pages/Navbar";
import { Button } from "./components/ui/button";
import Survey from "./pages/Survey";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Assess Your Risk",
    link: "/assess-your-risk",
  },
  {
    title: "Map",
    link: "/map",
  },
];

function App() {
  const [page, setPage] = React.useState("Home");
  return (
    <>
      <ChakraProvider value={system}>
        <Navbar setPage={setPage} />
        {page === "Home" && <Home />}
        {page === "Assess Your Risk" && <Survey />}
        {page === "Map" && <Map />}
      </ChakraProvider>
      {/* <ChakraProvider value={system}>
        git 
        {page == "Home" && <Home />}
        {page == "Assess Your Risk" && <Survey />}
      </ChakraProvider> */}
    </>
  );
}

export default App;
