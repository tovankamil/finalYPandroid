import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import dataProvinsiReducer from './dataProvinsi';
import {formKorespondenReducer} from './formKoresponden';
import dataKorespondenReducer from './dataKoresponden';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  dataProvinsiReducer,
  formKorespondenReducer,
  dataKorespondenReducer,
});
export default reducer;
