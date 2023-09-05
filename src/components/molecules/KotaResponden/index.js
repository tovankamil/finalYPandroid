import {Picker} from '@react-native-community/picker';
import React, {useEffect} from 'react';
import {Text, View} from 'react-native';

import {StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataKecamatan2, dataProvinsi} from '../../../redux/action';
const KotaResponden = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);
  const listkotaReducer = useSelector(state => state?.listkota);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dataProvinsi());
    dispatch({type: 'RESET_NEW_DATA_KECAMATAN'});
    dispatch({type: 'RESET_NEW_DATA_KOTA'});
    dispatch({type: 'RESET_NEW_DATA_DESA'});
    return () => {};
  }, [globalState.successinput]);

  const submit = value => {
    dispatch(
      dataKecamatan2({
        kota: value.split('#')[0],
      }),
    );
    dispatch({
      type: 'NEW_DATA_KOTA',
      value: {
        kota: value.split('#')[0],
        nama_kota: value,
      },
    });
  };

  return (
    <>
      <Text style={styles.label}> Kota</Text>
      <View style={styles.input}>
        <Picker
          selectedValue={listkotaReducer?.nama_kota}
          onValueChange={itemValue => submit(itemValue)}
          style={styles.label}
        >
          <Picker.Item label="Pilih Kota" value={0} key={0} />
          {listkotaReducer?.data_kota?.data &&
            listkotaReducer?.data_kota?.data?.map((d, i) => {
              return (
                <Picker.Item
                  label={d.nama}
                  value={`${d._id}#${d.nama}`}
                  key={i}
                />
              );
            })}
        </Picker>
      </View>
    </>
  );
};

export default KotaResponden;

const styles = StyleSheet.create({
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    paddingBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
  },
});
