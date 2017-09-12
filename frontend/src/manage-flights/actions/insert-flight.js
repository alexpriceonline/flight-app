import { apiUrl } from '../../constants/db';
import {
  SET_MANAGE_FLIGHT_MESSAGE,
  MANAGE_FLIGHT_LOADING,
} from '../constants';

const insertFlight = function(org, dest) {
  return (dispatch) => {

    // Set loading state
    dispatch({ type: MANAGE_FLIGHT_LOADING, state: true });

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ org, dest })
    }).then(res => {
      if (res.status >= 400) {
        throw new Error('Bad response from server');
      }
      return res.json();
    }).then(data => {
      if (data.success) {
        dispatch({
          type: SET_MANAGE_FLIGHT_MESSAGE,
          data: 'Flight saved successfully'
        });

        // Hide the message after 2 seconds
        setTimeout(() => {
          dispatch({ type: SET_MANAGE_FLIGHT_MESSAGE, data: '' });
        }, 20000);
      }

      dispatch({ type: MANAGE_FLIGHT_LOADING, state: false });
    });
  };
};

export default insertFlight;
