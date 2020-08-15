import React, { useContext } from "react";
import {
  Grid,
  Segment,
  Label,
  Card,
  Statistic,
  Dimmer,
  Loader,
  Image,
} from "semantic-ui-react";
import AppContext from "../../context/appContext";

const Output = () => {
  const appState = useContext(AppContext);
  const { allTime, week, loading } = appState;

  return (
    <Segment>
      <Dimmer active={loading}>
        <Loader />
      </Dimmer>

      {week.length > 0 && (
        <Grid centered>
          <Grid.Row centered columns={5}>
            {week[0].songs.map((i, k) => {
              return (
                <Grid.Column key={k}>
                  <Segment
                    inverted
                    className="OutputItem"
                    style={{ marginBottom: 10 }}
                  >
                    <Label color="purple" size="large" ribbon>
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
                    <Statistic.Group inverted size="mini" horizontal>
                      <Statistic
                        inverted
                        color="yellow"
                        label="Highest Position"
                        value={i.position.peakPosition}
                      />

                      {i.position.positionLastWeek ? (
                        <Statistic
                          inverted
                          color="teal"
                          label={`Last week's Position`}
                          value={i.position.positionLastWeek}
                        />
                      ) : null}

                      {i.position.weeksOnChart ? (
                        <Statistic
                          inverted
                          color="orange"
                          label={`Week's on the chart`}
                          value={i.position.weeksOnChart}
                        />
                      ) : null}
                    </Statistic.Group>
                  </Segment>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      )}

      {allTime.length > 0 && (
        <Grid centered>
          <Grid.Row centered columns={5}>
            {allTime[0].songs.map((i, k) => {
              return (
                <Grid.Column key={k}>
                  <Segment
                    inverted
                    className="OutputItem"
                    style={{ marginBottom: 10 }}
                  >
                    <Label color="purple" size="large" ribbon>
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
                  </Segment>
                </Grid.Column>
              );
            })}
          </Grid.Row>
        </Grid>
      )}
    </Segment>
  );
};

export default Output;
