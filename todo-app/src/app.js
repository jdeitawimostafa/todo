import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import { Navbar } from "react-bootstrap";

import ToDo from "./components/todo/todo.js";
import SettingsProvider from "./context/setting.js";

export default function App() {
  return (
    <>
      {/* <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="ml-1" href="#home">
          Home
        </Navbar.Brand>
      </Navbar> */}
      <SettingsProvider>
      <ToDo />
      </SettingsProvider>
      {/* <Navbar bg="primary" variant="dark">
        <Navbar.Brand className="footer">&copy; ToDo 2021</Navbar.Brand>
      </Navbar> */}
    </>
  );
}
