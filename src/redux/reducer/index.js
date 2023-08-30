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
import fieldjawabanRespondenReducer from './fieldjawabanResponden';
import scfjawabanRespondenReducer from './sfcjawabanresponden';
import scfsubjawabanResponden from './scfsubjawabanResponden';
import qaloadidentitaslainnyareducer from './dataqaidentitaslainnya';

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
  fieldjawabanRespondenReducer,
  scfjawabanRespondenReducer,
  scfsubjawabanResponden,
  qaloadidentitaslainnyareducer,
});
export default reducer;
