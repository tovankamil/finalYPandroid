import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useMemo, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {dataDesa, dataKecamatan, setLoading} from '../../../../redux/action';
import {useForm} from '../../../../utils';

const DataKecamatan = () => {
  const globalState = useSelector(
    state => state.dataProvinsiReducer.data_kecamatan,
  );

  const [form, setForm] = useForm({
    nama: '',
    kecamatan: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    setForm({
      nama: '',
      kecamatan: '',
    });
  }, [globalState]);
  const PilihKecamatan = useCallback(
    ({label, value, onSelectChange, data}) => {
      if (data?.data?.length == 0) {
        return (
          <Picker
            style={styles.input}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}
            style={styles.label}
          >
            <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
          </Picker>
        );
      } else {
        value && dispatch(dataDesa({kecamatan: value.split('#')[0]}));
        value &&
          dispatch({
            type: 'SET_KECAMATAN_KORESPONDEN',
            value: value.split('#')[1],
          });
        return (
          <Picker
            style={styles.input}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}
            style={styles.label}
          >
            <Picker.Item label="Pilih Kecamatan" value={0} key={0} />
            {data?.data?.map((value, index) => {
              return (
                <Picker.Item
                  key={index}
                  label={value.nama}
                  value={`${value._id}#${value.nama}`}
                />
              );
            })}
          </Picker>
        );
      }
    },
    [globalState],
  );
  return (
    <>
      <View>
        <Text style={styles.label}>Kecamatan</Text>
        <View style={styles.input}>
          <PilihKecamatan
            label="Kecamatan"
            data={globalState}
            onSelectChange={value => setForm('kecamatan', value)}
            value={form.kecamatan}
          />
        </View>
      </View>
    </>
  );
};

export default React.memo(DataKecamatan);

const styles = StyleSheet.create({
  label: {fontSize: 16, fontFamily: 'Poppins-Regular', color: '#020202'},
  input: {
    borderWidth: 1,
    borderColor: '#020202',
    borderRadius: 8,
    paddingHorizontal: 2,
    paddingVertical: 0,
    color: 'black',
    fontSize: 16,
    fontFamily: 'Poppins-Regular',
    color: '#020202',
  },
});
