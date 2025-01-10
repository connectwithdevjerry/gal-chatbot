import { Route, Routes } from "react-router";
import { Navbar } from "./components";
import { Chat } from "./pages";
import React from "react";
import { CHAT, HOME } from "./paths";
import "./styles.css";

function App() {
  return (
    <Routes>
      {/* <Route path={HOME} element={<Navbar />} /> */}
      <Route path={HOME} element={<Chat />} />
    </Routes>
  );
}

export default App;
