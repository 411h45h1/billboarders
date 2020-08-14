import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Input } from "./components/Input";
import { Output } from "./components/Output/";
import { Scrollbars } from "react-custom-scrollbars";

const App = () => {
  return (
    <AppState>
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
        <div className="App">
          <header className="Header">
            <p id="headerText">BillBoarders</p>
          </header>
          <div className="Body">
            <Input />
            <Output />
          </div>
          <footer className="Footer"></footer>
        </div>
      </Scrollbars>
    </AppState>
  );
};

export default App;
