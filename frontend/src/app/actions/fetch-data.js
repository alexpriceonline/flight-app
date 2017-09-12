import 'isomorphic-fetch';

import getAvailableOrgs from '../../helpers/get-available-orgs';
import {
  APP_LOADING,
  SET_FLIGHT_DATA,
  SET_AIRPORT_DATA,
  SET_AVAILABLE_ORGS,
} from '../constants';

const APIURL = '//localhost:3001';

const fetchFlightData = function() {
  return (dispatch) => {
    fetch(APIURL)
      .then(res => {
        if (res.status >= 400) {
          throw new Error('Bad response from server');
        }
        return res.json();
      })
      .then(data => {
        dispatch({ type: SET_FLIGHT_DATA, data: data.flights });
        dispatch({ type: SET_AIRPORT_DATA, data: data.airports });
        dispatch({
          type: SET_AVAILABLE_ORGS,
          data: getAvailableOrgs(data.flights)
        });
        dispatch({ type: APP_LOADING, state: false });
      });
  };
};

export default fetchFlightData;
