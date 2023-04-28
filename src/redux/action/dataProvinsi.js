import Axios from 'axios';
import {API_HOST} from '../../config';
import {removeData, showMessage, storeData} from '../../utils';
import {setLoading} from './global';

export const dataProvinsi = () => dispatch => {
  dispatch(setLoading(true));
  Axios.get(`${API_HOST.url}/be/kota`)
    .then(res => {
      dispatch({type: 'LIST_DATA_KOTA', value: res?.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};

// export const dataKecamatan = id => dispatch => {
//   console.log('id', id);
//   dispatch(setLoading(true));

//   Axios.get(`${API_HOST.url}/kecamatan/${id}`)
//     .then(res => {
//       dispatch({type: 'LIST_DATA_KECAMATAN', value: res.data.data});
//       dispatch(setLoading(false));
//     })
//     .catch(err => {
//       dispatch(setLoading(false));
//       showMessage('error', 'danger');
//     });
// };

export const dataKecamatan2 = id => dispatch => {
  dispatch(setLoading(true));

  Axios.post(`${API_HOST.url}/be/kecamatan/byId`, id)
    .then(res => {
      dispatch({type: 'LIST_DATA_KECAMATAN', value: res.data});

      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};

export const dataDesa = id => dispatch => {
  dispatch(setLoading(true));

  Axios.post(`${API_HOST.url}/be/desa/ById`, id)
    .then(res => {
      dispatch({type: 'LIST_DATA_DESA', value: res.data});
      dispatch(setLoading(false));
    })
    .catch(err => {
      dispatch(setLoading(false));
      showMessage('error', 'danger');
    });
};
