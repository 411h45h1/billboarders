import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";
import { getChart } from "billboard-top-100";

const AppState = (props) => {
  const initialState = {
    week: [],
  };
  const [state, dispatch] = useReducer(appReducer, initialState);

  //Get Chart
  const getChartWeek = () => {
    getChart("hot-100", "2020-08-13", (err, chart) => {
      if (state.week.length === 0) {
        dispatch({ type: "GET_HOT100_WEEK", payload: chart });
      } else if (err) {
        console.log(err);
      }
    });
  };

  return (
    <AppContext.Provider value={{ week: state.week, getChartWeek }}>
      {props.children}
    </AppContext.Provider>
  );
};
export default AppState;
