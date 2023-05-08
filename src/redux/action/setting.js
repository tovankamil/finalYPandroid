import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const dataRelawan = token => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/fe/users/login/dataprofilerelawan`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch({type: 'SETTING_RELAWAN', value: res?.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      //   showMessage('error', 'danger');
    });
};

export const dataRelawanUpdatePassword = (token, data) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(
    `${API_HOST.url}/fe/users/login/updatepassword`,
    {password: data},
    {
      headers: {
        Authorization: `Bearer ${token?.value}`,
        'Content-Type': 'application/json',
      },
    },
  )
    .then(res => {
      showMessage('Password berhasil diupdate', 'success');
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('Error', 'danger');
    });
};
