import React from "react";
import "./App.css";
import AppState from "./context/AppState";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <header className="Header">
          <p style={{ marginLeft: "2%" }}>BillBoarders</p>
        </header>
        <body className="Body"></body>
        <footer className="Footer"></footer>
      </div>
    </AppState>
  );
};

export default App;
