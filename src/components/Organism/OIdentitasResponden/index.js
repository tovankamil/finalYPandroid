import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  DesaResponden,
  Gap,
  KecamatanResponden,
  KotaResponden,
} from '../../../components';
import {dataProvinsi} from '../../../redux/action';
import {useForm} from '../../../utils';

const OIdentitasResponden = ({navigation}) => {
  const globalStateProvinsi = useSelector(state => state?.dataProvinsiReducer);
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

  return (
    <>
      <Gap height={10} />
      <KotaResponden />
      <Gap height={20} />
      <KecamatanResponden />
      <Gap height={20} />
      <DesaResponden />
      <Gap height={14} />
    </>
  );
};

export default React.memo(OIdentitasResponden);
