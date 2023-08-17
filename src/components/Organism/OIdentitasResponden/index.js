import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, Select} from '../../../components';
import {dataProvinsi} from '../../../redux/action';
import {useForm} from '../../../utils';

const OIdentitasResponden = ({navigation}) => {
  const globalStateProvinsi = useSelector(state => state?.dataProvinsiReducer);
  console.log(globalStateProvinsi);
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
    dispatch({
      type: 'RESET_PROVINSI',
    });
    dispatch(dataProvinsi());
    return () => {};
  }, []);

  const memoKota = useMemo(() => {
    return (
      <Select
        label="Kota"
        value={form.kota}
        onSelectChange={value => setForm('kota', value)}
        namaSelect="Pilih Kota"
        datax={globalStateProvinsi?.data_kota}
        koresponden
      />
    );
  }, [form.kota, globalStateProvinsi?.data_kota]);

  const memoKecamatan = useMemo(() => {
    return (
      <Select
        label="Kecamatan"
        value={form.kecamatan}
        datax={globalStateProvinsi?.data_kecamatan}
        namaSelect="Pilih Kecamatan"
        onSelectChange={value => setForm('kecamatan', value)}
        koresponden
      />
    );
  }, [form.kecamatan, globalStateProvinsi?.data_kecamatan]);

  const memoDesa = useMemo(() => {
    return (
      <Select
        label="Desa"
        value={form.desa}
        datax={globalStateProvinsi?.data_desa}
        onSelectChange={value => setForm('desa', value)}
        namaSelect="Pilih Desa"
        koresponden
      />
    );
  }, [form.desa, globalStateProvinsi?.data_desa]);

  return (
    <>
      <Gap height={10} />
      {memoKota}
      <Gap height={20} />
      {memoKecamatan}
      <Gap height={20} />
      {memoDesa}
      <Gap height={14} />
    </>
  );
};

export default React.memo(OIdentitasResponden);
