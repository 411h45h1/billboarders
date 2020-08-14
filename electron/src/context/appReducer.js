export default (state, { type, payload }) => {
  switch (type) {
    case "LOADING":
      return {
        ...state,
        loading: true,
      };
    case "GET_ALLTIME_200":
      return {
        ...state,
        allTime: [...state.allTime, payload],
      };
    case "GET_HOT100_WEEK":
      return {
        ...state,
        week: [...state.week, payload],
      };
    case "CLEAR_HOT100_WEEK":
      return {
        ...state,
        week: [],
      };
    default:
      return state;
  }
};
