const initialState = {
  count: 2
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "INCREASE":
      return {
        ...state,
        count: state.count + 1
      }
    default:
      return state
  }
}

export default reducer;