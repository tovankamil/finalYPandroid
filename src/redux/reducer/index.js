import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import dataProvinsiReducer from './dataProvinsi';
import {formKorespondenReducer} from './formKoresponden';
import dataKorespondenReducer from './dataKoresponden';
import settingRelawanReducer from './setting';
import topKotaReducer from './topkota';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  dataProvinsiReducer,
  formKorespondenReducer,
  dataKorespondenReducer,
  settingRelawanReducer,
  topKotaReducer,
});
export default reducer;
