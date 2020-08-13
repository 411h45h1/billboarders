import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Grid, Header } from "semantic-ui-react";
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
        <body className="Body">
          <Grid columns={1} centered>
            <Grid.Column>
              <Input />
            </Grid.Column>
            <Grid.Column>
              <Output />
            </Grid.Column>
          </Grid>
        </body>
        <footer className="Footer"></footer>
      </div>
    </AppState>
  );
};

export default App;
