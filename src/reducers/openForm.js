import * as types from "../constants/ActionType";

var initState = false;

var myReducer = (state = initState, action) => {
  switch (action.type) {
    case types.OPEN_FORM:
      return true;
    case types.CLOSE_FORM:
      return false;
    default:  return state;
  }
};

export default myReducer;
