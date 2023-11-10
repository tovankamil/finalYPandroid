import Axios from 'axios';
import {API_HOST} from '../../config';
import {showMessage} from '../../utils';
import {setLoading} from './global';

export const dataTopKota = token => dispatch => {
  dispatch(setLoading(false));
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/fe/users/login/topKota`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch({type: 'SET_TOP_KOTA', value: res?.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      //   showMessage('error', 'danger');
    });
};
