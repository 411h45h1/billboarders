import React from "react";
import "./App.css";
import AppState from "./context/AppState";
import { Input } from "./components/Input";
import { Output } from "./components/Output/";
import { Scrollbars } from "react-custom-scrollbars";
import { Grid, Button } from "semantic-ui-react";
import { createMedia } from "@artsy/fresnel";

const AppMedia = createMedia({
  breakpoints: {
    mobile: 320,
    tablet: 768,
    computer: 992,
    largeScreen: 1400,
    widescreen: 1920,
  },
});

const mediaStyles = AppMedia.createMediaStyle();
const { Media, MediaContextProvider } = AppMedia;

const App = () => {
  return (
    <AppState>
      <Scrollbars
        style={{
          width: "100vw",
          height: "100vh",
          backgroundColor: "#AE854E",
        }}
      >
        <style>{mediaStyles}</style>
        <MediaContextProvider>
          <Grid style={{ margin: 5 }}>
            <Grid.Row className="AppHeader" columns={"equal"}>
              {/* Mobile */}

              <Grid.Column width={16} as={Media} at="mobile">
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

              <Grid.Column width={16} as={Media} at="mobile">
                <p id="headerText">BillBoarders</p>
              </Grid.Column>

              {/* Greater */}

              <Grid.Column width={8} as={Media} greaterThanOrEqual="tablet">
                <p id="headerText">BillBoarders</p>
              </Grid.Column>

              <Grid.Column width={8} as={Media} greaterThanOrEqual="tablet">
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

            <Grid.Column id="NoDrag" width={16}>
              <Input />
            </Grid.Column>
            <Grid.Column id="NoDrag" width={16} style={{ marginTop: 10 }}>
              <Output />
            </Grid.Column>
          </Grid>
        </MediaContextProvider>
      </Scrollbars>
    </AppState>
  );
};

export default App;
