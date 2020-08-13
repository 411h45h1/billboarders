export default (state, { type, payload }) => {
  switch (type) {
    case "GET_HOT100_WEEK":
      return {
        ...state,
        week: [...state.week, payload],
      };
    default:
      return state;
  }
};
