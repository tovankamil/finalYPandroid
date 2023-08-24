import {combineReducers} from 'redux';
import {registerReducer} from './auth';
import {globalReducer} from './global';
import dataProvinsiReducer from './dataProvinsi';
import {formKorespondenReducer} from './formKoresponden';
import dataKorespondenReducer from './dataKoresponden';
import settingRelawanReducer from './setting';
import topKotaReducer from './topkota';
import qaloadreducer from './dataqa';
import questionReducer from './question';
import jawabanRespondenReducer from './jawabanResponden';
import subjawabanRespondenReducer from './subjawabanResponden';

const reducer = combineReducers({
  registerReducer,
  globalReducer,
  dataProvinsiReducer,
  formKorespondenReducer,
  dataKorespondenReducer,
  settingRelawanReducer,
  topKotaReducer,
  qaloadreducer,
  questionReducer,
  jawabanRespondenReducer,
  subjawabanRespondenReducer,
});
export default reducer;
