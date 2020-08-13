import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Header } from "semantic-ui-react";
import { Input } from "./components/Input";
import { Output } from "./components/Output/";

const App = () => {
  return (
    <AppState>
      <div className="App">
        <header className="Header">
          <Header dividing>
            <p style={{ marginLeft: "2%", color: "white" }}>BillBoarders</p>
          </Header>
        </header>
        <div className="Body">
          <Input />
          <Output />
        </div>
        <footer className="Footer"></footer>
      </div>
    </AppState>
  );
};

export default App;
