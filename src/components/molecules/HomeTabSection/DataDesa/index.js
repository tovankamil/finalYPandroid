import {Picker} from '@react-native-community/picker';
import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useDispatch, useSelector} from 'react-redux';
import {dataDesa} from '../../../../redux/action';

import {useForm} from '../../../../utils';
import {SelectKoresponden} from '../../../atoms';

const DataDesa = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);

  const [form, setForm] = useForm({
    nama: '',
    desa: '',
  });
  useEffect(() => {
    setForm({
      nama: '',
      desa: '',
    });
  }, [globalState]);
  const dispatch = useDispatch();
  // const dispatchData = useCallback(
  //   value => {
  //     setForm('desa', value);
  //     let data = {
  //       desa: value,
  //     };
  //     dispatch({type: 'SET_DESA_KORESPONDEN', value: data});
  //   },
  //   [globalState],
  // );
  const PilihDesa = useCallback(
    ({label, value, onSelectChange, data}) => {
      if (data?.data?.length == 0) {
        return (
          <Picker
            style={styles.input}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}
            style={styles.label}
          >
            <Picker.Item label="Pilih Desa" value={0} key={0} />
          </Picker>
        );
      } else {
        return (
          <Picker
            style={styles.input}
            selectedValue={value}
            onValueChange={itemValue => onSelectChange(itemValue)}
            style={styles.label}
          >
            <Picker.Item label="Pilih Desa" value={0} key={0} />
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
    [form.desa],
  );
  return (
    <>
      <Text style={styles.label}>Desa</Text>
      <View style={styles.input}>
        {/* <PilihDesa
          label="Desa"
          data={globalState}
          onSelectChange={value => setForm('desa', value)}
          value={form.desa}
        /> */}
      </View>
    </>
  );
};

export default React.memo(DataDesa);
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
