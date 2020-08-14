import React, { useContext, useEffect, useState } from "react";
import {
  Grid,
  Segment,
  Input as SemanticInput,
  Header,
  Button,
} from "semantic-ui-react";
import AppContext from "../../context/appContext";

const Input = () => {
  const appState = useContext(AppContext);
  const { getChartWeek, week, clearWeek } = appState;
  const [search, setSearch] = useState("");

  useEffect(() => {}, [getChartWeek, week, search]);

  return (
    <Segment className="Input">
      <Grid columns="equal">
        <Grid.Column width={2}>
          <Header size="huge" textAlign="center">
            Search
          </Header>
        </Grid.Column>
        <Grid.Column width={3}>
          <SemanticInput
            onChange={(e) => setSearch(e.target.value)}
            size="large"
            disabled={false}
            loading={false}
            placeholder="YYYY-MM-DD"
          />
        </Grid.Column>

        <Grid.Column width={2}>
          {search.length > 9 ? (
            <Button
              content="Submit"
              primary
              onClick={() => getChartWeek(search)}
            />
          ) : null}
        </Grid.Column>
        <Grid.Column width={1}>
          {search.length > 9 ? (
            <Button content="Clear" color="red" onClick={() => clearWeek()} />
          ) : null}
        </Grid.Column>

        <Grid.Column />
      </Grid>
    </Segment>
  );
};

export default Input;
