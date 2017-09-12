import {
  SET_MANAGE_FLIGHT_MESSAGE,
  MANAGE_FLIGHT_LOADING,
} from './constants';

const initalState = {
  loading: false,
  message: ''
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case MANAGE_FLIGHT_LOADING:
      return { ...state, loading: action.state };

    case SET_MANAGE_FLIGHT_MESSAGE:
      return { ...state, message: action.data };

    default:
      return state;
  }
};

export default reducer;
