import { UPDATE_FILTER } from './constants';

const initalState = {
  selectedFilter: "null",
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_FILTER:
      return Object.assign({}, state, {
        selectedFilter: action.filter,
      });

    default:
      return state;
  }
};

export default reducer;
