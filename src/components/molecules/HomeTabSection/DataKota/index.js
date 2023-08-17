import React, {useCallback, useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  dataProvinsi,
  dataKecamatan2,
  setLoading,
} from '../../../../redux/action';
import {useForm} from '../../../../utils';
import {SelectKoresponden} from '../../../atoms';

const DataKota = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer.data_kota);

  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
  });

  useEffect(() => {
    dispatch(dataProvinsi());
  }, []);

  const Kotadata = useMemo(() => {
    dispatch({type: 'LIST_DATA_DESA_RESET'});
    return (
      <SelectKoresponden
        label="Kota"
        data={globalState}
        onSelectChange={value => setForm('kota', value)}
        value={form.kota}
      />
    );
  }, [form.kota, globalState]);
  return <View>{Kotadata}</View>;
};

export default React.memo(DataKota);
