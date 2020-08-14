import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { getChart, listCharts } from "billboard-top-100";

const AppState = (props) => {
  const initialState = {
    week: [],
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  const getChartLists = () => {
    listCharts((err, charts) => {
      if (err) console.log(err);
      console.log(charts);
    });
  };

  //Get Chart
  const getChartWeek = (search) => {
    getChart("hot-100", search, (err, chart) => {
      if (state.week.length === 0) {
        dispatch({ type: "GET_HOT100_WEEK", payload: chart });
      } else if (err) {
        console.log(err);
      }
    });
  };

  const clearWeek = () => dispatch({ type: "CLEAR_HOT100_WEEK" });

  return (
    <AppContext.Provider
      value={{
        week: state.week,
        getChartLists,
        getChartWeek,
        clearWeek,
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
