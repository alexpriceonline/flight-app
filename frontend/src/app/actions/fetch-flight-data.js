import 'isomorphic-fetch';

import getAvailableOrgs from '../../helpers/get-available-orgs';
import {
  APP_LOADING,
  SET_FLIGHT_DATA,
  SET_AVAILABLE_ORGS,
} from '../constants';

const fetchFlightData = function() {
  return (dispatch) => {
    fetch('//localhost:3001')
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(flightData => {
        dispatch({ type: SET_FLIGHT_DATA, flightData });
        dispatch({
          type: SET_AVAILABLE_ORGS,
          availableOrgs: getAvailableOrgs(flightData)
        });
        dispatch({ type: APP_LOADING, state: false });
      });
  };
};

export default fetchFlightData;
