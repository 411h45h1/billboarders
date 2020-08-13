import React, { useReducer } from "react";
import AppContext from "./appContext";
import appReducer from "./appReducer";

const AppState = (props) => {
  const initialState = [];
  const [state, dispatch] = useReducer(appReducer, initialState);

  return <AppContext.Provider value={{}}>{props.children}</AppContext.Provider>;
};
export default AppState;
