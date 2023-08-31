import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData, showMessage} from '../../utils';
import {setLoading} from './global';

export const inpudataresponden = (token, data) => dispatch => {
  //   dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/fe/users/login/inputresponden`, data, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },

    timeout: 900,
  })
    .then(res => {
      //   dispatch(setLoading(false));
      console.log('res', res);
      //   dispatch({type: 'LIST_DATA_KORESPONDEN', value: res.data});
    })
    .catch(err => {
      if (err.response.status === 404) {
        dispatch(setLoading(false));
        err.response.status == 404 &&
          showMessage(
            err.response.status == 404 ? err?.response?.data?.msg : '404',
            'error',
          );
      }
      if (err.response.status === 500) {
        err.response.status !== 500 && dispatch(setLoading(false));
        showMessage(
          err.response.status == 500
            ? 'Login expired silahkan login kembali '
            : '500',
          'error',
        );
      }

      err.response.status === 500 &&
        setTimeout(() => {
          dispatch(setLoading(false));
          err.response.status === 500 && removeData('token');
          err.response.status === 500 && removeData('userProfile');

          dispatch(setLogout(true));
        }, 1000);
    });
};
