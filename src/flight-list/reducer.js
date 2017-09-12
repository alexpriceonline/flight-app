import {
  UPDATE_FILTER,
  UPDATE_PAGE,
} from './constants';

const initalState = {
  selectedFilter: "null",
  selectedPage: 0,
};

const reducer = function(state = initalState, action = {}) {
  switch (action.type) {

    case UPDATE_FILTER:
      return Object.assign({}, state, {
        selectedFilter: action.filter,
      });

    case UPDATE_PAGE:
      return Object.assign({}, state, {
        selectedPage: action.page,
      });

    default:
      return state;
  }
};

export default reducer;
