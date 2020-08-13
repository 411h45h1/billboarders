import React, { useContext, useEffect } from "react";
import { Segment } from "semantic-ui-react";
import DatePicked from "./DatePicked";
import AppContext from "../../context/appContext";

const Input = () => {
  const appState = useContext(AppContext);
  const { getChartWeek, week } = appState;

  useEffect(() => {
    getChartWeek();
  }, [getChartWeek, week]);

  return (
    <Segment className="Input">
      <p style={{ color: "black" }}>Input</p>
      <DatePicked />
    </Segment>
  );
};

export default Input;
