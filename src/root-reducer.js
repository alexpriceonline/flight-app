import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import appReducer from './app/reducer';
import flightListReducer from './flight-list/reducer';

const rootReducer = combineReducers({
  router: routerReducer,
  app: appReducer,
  flightList: flightListReducer,
});

export default rootReducer;
