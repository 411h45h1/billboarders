import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Input } from "./components/Input";
import { Output } from "./components/Output/";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid, Button } from "semantic-ui-react";

const App = () => {
  return (
    <AppState>
      <Scrollbars style={{ width: "100vw", height: "100vh" }}>
        <div className="App">
          <Grid className="Header" columns="equal" id="Drag">
            <Grid.Row id="Drag">
              <Grid.Column>
                <p id="headerText">BillBoarders</p>
              </Grid.Column>

              <Grid.Column>
                <Button.Group id="NoDrag" floated="right">
                  <Button
                    as={"a"}
                    href="https://github.com/AhmedAlihashi/billboarders"
                    target="_blank"
                    rel="noopener noreferrer"
                    content="Click here for the repository"
                  />
                  <Button
                    icon="power off"
                    color="red"
                    onClick={() => {
                      window.close();
                    }}
                  />
                </Button.Group>
              </Grid.Column>
            </Grid.Row>
          </Grid>
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
