import React, { useReducer, useEffect } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { getChart, listCharts } from "billboard-top-100";

const AppState = (props) => {
  const initialState = {
    allTime: [],
    week: [],
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Get Greatest 200 list
  const getAllTime200 = () => {
    getChart("greatest-billboard-200-albums", (err, chart) => {
      if (err) console.log(err);
      dispatch({ type: "GET_ALLTIME_200", payload: chart });
      console.log("greatest", chart.songs);
    });
  };

  // lists
  const getChartLists = () => {
    listCharts((err, charts) => {
      if (err) console.log(err);
      console.log(charts);
    });
  };

  //Get week Chart
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
        allTime: state.allTime,
        getAllTime200,
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
