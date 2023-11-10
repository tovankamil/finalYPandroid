import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const signUpAction = (dataRegister, navigation) => dispatch => {
  Axios.post(`${API_HOST.url}/fe/users/registeruser`, dataRegister)
    .then(res => {
      const token = res?.data?.data?.token;
      const profile = res?.data?.data?.result;

      storeData('token', {value: token});
      storeData('userProfile', profile);

      // navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});

      // if (photoReducer.isUploadPhoto) {
      //   const photoForUpload = new FormData();
      //   photoForUpload.append('file', photoReducer);

      //   Axios.post(`${API_HOST.url}/user/photo`, photoForUpload, {
      //     headers: {
      //       Authorization: token,
      //       'Content-Type': 'multipart/form-data',
      //     },
      //   })
      //     .then((resUpload) => {
      //       profile.profile_photo_url = `${API_HOST.storage}/${resUpload.data.data[0]}`;
      //       storeData('userProfile', profile);
      //       navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      //     })
      //     .catch((err) => {
      //       showMessage(
      //         err?.response?.message || 'Uplaod photo tidak berhasil',
      //       );
      //       navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      //     });
      // } else {
      //   storeData('userProfile', profile);
      //   navigation.reset({index: 0, routes: [{name: 'SuccessSignUp'}]});
      // }

      dispatch(setLoading(false));
      navigation.navigate('MainApp');
    })
    .catch(err => {
      dispatch(setLoading(false));
      console.log('error', err?.response?.msg);
      showMessage(`${err?.response?.data?.msg}`, 'danger');
    });
};

export const signInAction = (form, navigation) => dispatch => {
  dispatch(setLoading(true));
  Axios.post(`${API_HOST.url}/fe/login`, form)
    .then(res => {
      const token = res?.data?.data?.token;
      const profile = res?.data?.data?.result;

      storeData('token', {value: token});
      storeData('userProfile', profile);
      dispatch(setLoading(false));
      navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
    })
    .catch(err => {
      dispatch(setLoading(false));
      // showMessage(err?.response?.data?.data?.message);
      showMessage('Gagal login', 'danger');
    });
};

export const lupPassword = (form, navigation) => dispatch => {
  try {
    if (form?.username.length < 1) {
      showMessage('Silahkan masukan username / no hp anda', 'danger');
    } else {
      // dispatch(setLoading(true));
      Axios.post(`${API_HOST.url}/fe/lupapassword`, form)
        .then(res => {
          showMessage(res?.data?.data, 'success');
          setTimeout(() => {
            dispatch(setLoading(false));
            navigation.navigate('SignIn');
          }, 1000);
        })
        .catch(err => {
          dispatch(setLoading(false));
          // showMessage(err?.response?.data?.data?.message);
          showMessage(err?.response.data?.msg, 'danger');
        });
    }
  } catch (error) {}
};

export const cekdataKode = (data, navigation) => dispatch => {
  dispatch(setLoading(true));

  try {
    Axios.get(`${API_HOST.url}/be/kodereferral/${data?.koderefferal}`, {
      // timeout: 900,
    })
      .then(res => {
        dispatch({type: 'SET_REGISTER', value: data});
        dispatch(setLoading(false));
        navigation.navigate('SignUpAddress');
      })
      .catch(err => {
        dispatch(setLoading(false));

        if (err.response.status == 400) {
          dispatch(setLoading(false));
          err.response.status == 400 &&
            showMessage(
              err.response.status == 400
                ? err?.response?.data?.msg
                : 'error 400',
              'error',
            );
        }
        // if (err.response.status === 500) {
        //   err.response.status !== 500 && dispatch(setLoading(false));
        //   showMessage(
        //     err.response.status == 500
        //       ? 'Login expired silahkan login kembali '
        //       : '500',
        //     'error',
        //   );
        // }
        // err.response.status === 500 &&
        //   setTimeout(() => {
        //     dispatch(setLoading(false));
        //     err.response.status === 500 && removeData('token');
        //     err.response.status === 500 && removeData('userProfile');
        //     dispatch(setLogout(true));
        //   }, 1000);
      });
  } catch (error) {
    console.log('error', error);
  }
};
