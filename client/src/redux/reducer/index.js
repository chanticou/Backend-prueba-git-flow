import * as actions from "../../actions-types";

const initialState = {
  houses: [],
};

const rootReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case actions.GET_HOUSES:
      return {
        ...state,
        houses: payload,
      };

    default:
      return state;
  }
};

export default rootReducer;
