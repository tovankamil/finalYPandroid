import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {
  DesaResponden,
  Gap,
  KecamatanResponden,
  KotaResponden,
} from '../../../components';
import {dataProvinsi} from '../../../redux/action';

const OIdentitasResponden = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'RESET_PROVINSI',
    });
    dispatch(dataProvinsi());

    dispatch({type: 'RESET_NEW_DATA_KECAMATAN'});
    dispatch({type: 'RESET_NEW_DATA_KOTA'});
    dispatch({type: 'RESET_NEW_DATA_DESA'});
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
