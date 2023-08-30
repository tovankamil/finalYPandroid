import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const question = () => dispatch => {
  Axios.get(`${API_HOST.url}/be/daftarpertanyaan`)
    .then(res => {
      dispatch({type: 'LIST_QUESTION', value: res?.data?.data});
      dispatch({type: 'LIST_CHECKED', value: res?.data?.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage(`${err}`, 'danger');
    });
};
