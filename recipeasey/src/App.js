import React from "react";
import "./App.css";
import RoutesComponent from "./Routes";
import NavBar from './NavBar';

const App = () => {
  return (
    <div>
      <NavBar />
      <RoutesComponent />
    </div>
  );
};

export default App;
