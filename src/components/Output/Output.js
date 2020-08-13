import React, { useContext, useEffect } from "react";
import {
  Grid,
  Segment,
  Label,
  Card,
  Statistic,
  Image,
} from "semantic-ui-react";
import AppContext from "../../context/appContext";

const Output = () => {
  const appState = useContext(AppContext);
  const { week } = appState;

  useEffect(() => {
    week[0] && console.log("week", week[0]);
  }, [week]);

  return (
    <Segment className="Output">
      <p style={{ color: "black" }}>Output</p>
      <Grid centered>
        <Grid.Row centered columns={5}>
          {week[0] &&
            week[0].songs.map((i, k) => (
              <Grid.Column key={k}>
                <Segment className="OutputItem" style={{ marginBottom: 10 }}>
                  <Label color="red" size="large" ribbon>
                    {i.rank}
                  </Label>
                  <Card>
                    <Card.Content>
                      <Image floated="left" size="tiny" src={i.cover} />
                      <Card.Header>{i.artist}</Card.Header>
                      <Card.Meta>
                        <span>{i.title}</span>
                      </Card.Meta>
                      {/* <Card.Description>{i.title}</Card.Description> */}
                    </Card.Content>
                  </Card>
                  <Statistic.Group size="mini" horizontal>
                    <Statistic
                      color="yellow"
                      label="Highest Position"
                      value={i.position.peakPosition}
                    />

                    {i.position.positionLastWeek ? (
                      <Statistic
                        color="teal"
                        label={`Last week's Position`}
                        value={i.position.positionLastWeek}
                      />
                    ) : null}

                    {i.position.weeksOnChart ? (
                      <Statistic
                        color="orange"
                        label={`Week's on the chart`}
                        value={i.position.weeksOnChart}
                      />
                    ) : null}
                  </Statistic.Group>
                </Segment>
              </Grid.Column>
            ))}
        </Grid.Row>
      </Grid>
    </Segment>
  );
};

export default Output;
