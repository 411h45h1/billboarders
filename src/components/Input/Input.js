import React, { useContext, useState } from "react";
import {
  Grid,
  Segment,
  Input as SemanticInput,
  Header,
  Button,
} from "semantic-ui-react";
import AppContext from "../../context/appContext";
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

const { Media } = AppMedia;

const Input = () => {
  const appState = useContext(AppContext);
  const { allTime, getChartWeek, clearWeek, getAllTime200 } = appState;
  const [search, setSearch] = useState("");

  const [firstButton, setFirstButton] = useState(false);
  const [secondButton, setSecondButton] = useState(false);

  const firstButtonClick = () => {
    setFirstButton(!firstButton);
    setSecondButton(false);
    if (allTime.length < 1) {
      getAllTime200();
    }
  };
  const secondButtonClick = () => {
    setFirstButton(false);
    setSecondButton(!secondButton);
  };
  return (
    <Segment>
      <Grid centered>
        {/* Nav */}
        <Grid.Column width={16}>
          <Header as="div" block>
            <Grid>
              {/* Mobile */}
              <Grid.Column floated="left" width={8} as={Media} at="mobile">
                <Button
                  toggle
                  size="huge"
                  active={firstButton}
                  onClick={firstButtonClick}
                  content="Billboard Top 200 Albums "
                />
              </Grid.Column>
              <Grid.Column floated="right" width={7} as={Media} at="mobile">
                <Button
                  toggle
                  size="huge"
                  active={secondButton}
                  onClick={secondButtonClick}
                  content="Billboard Hot 100"
                />
              </Grid.Column>

              {/* Tablet */}
              <Grid.Column floated="left" width={6} as={Media} at="tablet">
                <Button
                  toggle
                  size="massive"
                  active={firstButton}
                  onClick={firstButtonClick}
                  content="Billboard Top 200 Albums "
                />
              </Grid.Column>
              <Grid.Column floated="right" width={6} as={Media} at="tablet">
                <Button
                  toggle
                  size="massive"
                  active={secondButton}
                  onClick={secondButtonClick}
                  content="Billboard Hot 100"
                />
              </Grid.Column>

              {/* Greater */}
              <Grid.Column
                floated="left"
                width={5}
                as={Media}
                greaterThanOrEqual="computer"
              >
                <Button
                  toggle
                  size="massive"
                  active={firstButton}
                  onClick={firstButtonClick}
                  content="Billboard Top 200 Albums "
                />
              </Grid.Column>
              <Grid.Column
                floated="right"
                width={5}
                as={Media}
                greaterThanOrEqual="computer"
              >
                <Button
                  toggle
                  size="massive"
                  active={secondButton}
                  onClick={secondButtonClick}
                  content="Billboard Hot 100"
                />
              </Grid.Column>
            </Grid>
          </Header>
        </Grid.Column>

        {/* Search area */}

        {secondButton && (
          <>
            {/* Mobile */}
            <Grid.Column width={16} as={Media} at="mobile">
              <Header size="huge" textAlign="center">
                Billboard Hot 100 Search
              </Header>
            </Grid.Column>

            <Grid.Column width={16} as={Media} at="mobile">
              <SemanticInput
                style={{ width: "100%" }}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                size="large"
                disabled={false}
                loading={false}
                placeholder="YYYY-MM-DD"
              />
            </Grid.Column>
            <Grid.Column width={16} as={Media} at="mobile">
              {search.length > 9 ? (
                <Button
                  content="Submit"
                  primary
                  onClick={() => getChartWeek(search)}
                />
              ) : null}

              {search.length > 9 ? (
                <Button
                  content="Clear"
                  color="red"
                  onClick={() => clearWeek()}
                />
              ) : null}
            </Grid.Column>

            {/* Tablet */}
            <Grid.Column width={4} as={Media} greaterThanOrEqual="tablet">
              <Header size="huge" textAlign="center">
                Billboard Hot 100 Search
              </Header>
            </Grid.Column>

            <Grid.Column width={8} as={Media} greaterThanOrEqual="tablet">
              <SemanticInput
                style={{ width: "100%" }}
                type="text"
                onChange={(e) => setSearch(e.target.value)}
                size="large"
                disabled={false}
                loading={false}
                placeholder="YYYY-MM-DD"
              />
            </Grid.Column>
            <Grid.Column width={4} as={Media} greaterThanOrEqual="tablet">
              {search.length > 9 ? (
                <Button
                  content="Submit"
                  primary
                  onClick={() => getChartWeek(search)}
                />
              ) : null}

              {search.length > 9 ? (
                <Button
                  content="Clear"
                  color="red"
                  onClick={() => clearWeek()}
                />
              ) : null}
            </Grid.Column>
          </>
        )}
      </Grid>
    </Segment>
  );
};

export default Input;
