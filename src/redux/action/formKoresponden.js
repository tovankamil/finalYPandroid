import {useNavigation} from '@react-navigation/native';
import Axios from 'axios';
import {API_HOST} from '../../config';
import {getData, removeData, showMessage, storeData} from '../../utils';
import {setLoading, setLogout, setTabindexinputkoresponden} from './global';

export const signUpKorespondenAction = (
  dataRegister,
  navigation,
  token,
) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/fe/users/login/inputkoresponden`, dataRegister, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
  })
    .then(res => {
      dispatch(setLoading(false));
      dispatch(getDataKoresponden(token));
      dispatch({type: 'SET_RESET_FORM', value: 'value'});
      dispatch(setTabindexinputkoresponden(0));
      navigation.navigate('DataKoresponden');
    })
    .catch(err => {
      dispatch(setLoading(false));
      dispatch(setTabindexinputkoresponden(0));
      err.response.data.msg.length > 0 &&
        showMessage(err.response.data.msg, 'danger');
      err.response.status !== 500 && dispatch(setLoading(false));
      err.response.status == 500 &&
        showMessage(
          err.response.status == 500
            ? 'Login expired silahkan login kembali '
            : '',
          'error',
        );

      err.response.status == 500 &&
        setTimeout(() => {
          dispatch(setLoading(false));
          err.response.status === 500 && removeData('token');
          err.response.status === 500 && removeData('userProfile');

          dispatch(setLogout(true));
        }, 1000);
    });
};

export const getDataKoresponden = token => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/fe/users/login/listresponden`, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
      'Content-Type': 'application/json',
    },
    timeout: 900,
  })
    .then(res => {
      dispatch(setLoading(false));
      dispatch({type: 'LIST_DATA_KORESPONDEN', value: res.data});
    })
    .catch(err => {
      dispatch(setLoading(false));
      err.response.status !== 500 && dispatch(setLoading(false));
      showMessage(
        err.response.status == 500
          ? 'Login expired silahkan login kembali '
          : '',
        'error',
      );

      err.response.status == 500 &&
        setTimeout(() => {
          dispatch(setLoading(false));
          err.response.status === 500 && removeData('token');
          err.response.status === 500 && removeData('userProfile');

          dispatch(setLogout(true));
        }, 1000);
    });
};

export const resetDataFormKoresponden = () => {
  return {type: 'SET_RESET_FORM'};
};
