import React, {useEffect, useMemo} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

// import {dataDesa, dataKecamatan, Kota} from '../../../pages/SignUpAddress/data';
import {dataProvinsi} from '../../../redux/action';
import {useForm} from '../../../utils';
import {Gap, Select, TextInput} from '../../atoms';

const SignUpProvinsi = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
    nama_desa: '',
    desa: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataProvinsi());
  }, []);

  const memoKota = useMemo(() => {
    return (
      <Select
        label="Kota"
        value={form.kota}
        onSelectChange={value => setForm('kota', value)}
        namaSelect="Pilih Kota"
        datax={globalState?.data_kota}
      />
    );
  }, [form.kota, globalState?.data_kota]);

  const memoKecamatan = useMemo(() => {
    return (
      <Select
        label="Kecamatan"
        value={form.kecamatan}
        datax={globalState?.data_kecamatan}
        namaSelect="Pilih Kecamatan"
        onSelectChange={value => setForm('kecamatan', value)}
      />
    );
  }, [form.kecamatan, globalState?.data_kecamatan]);

  const memoDesa = useMemo(() => {
    return (
      <Select
        label="Desa"
        value={form.desa}
        datax={globalState?.data_desa}
        onSelectChange={value => setForm('desa', value)}
        namaSelect="Pilih Desa"
      />
    );
  }, [form.desa, globalState?.data_desa]);

  return (
    <View>
      <Gap height={16} />
      {memoKota}
      <Gap height={15} />
      {memoKecamatan}
      <Gap height={15} />
      {memoDesa}
    </View>
  );
};
export default React.memo(SignUpProvinsi);
