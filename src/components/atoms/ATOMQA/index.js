import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoadingQA} from '../../../redux/action/qa';

const ATOMQA = ({label, noParent, dataQA, isChecked, keydata}) => {
  const dispatch = useDispatch();
  const cek = id => {
    dataQA[noParent].jawaban.map((dataindex, index) => {
      dataindex.isChecked = false;
    });
    dataQA[noParent].jawaban[keydata].isChecked = true;
    dispatch(setLoadingQA(dataQA));
    dispatch({
      type: 'SET_NEWQA',
      value: dataQA,
    });
  };

  return (
    <View style={styles.detailPertanyaan}>
      <CheckBox
        value={isChecked}
        style={styles.checkbox}
        onValueChange={cek}
        tintColors={{true: 'green', false: '#ddd'}}
      />
      <Text>{label}</Text>
    </View>
  );
};

export default ATOMQA;
const styles = StyleSheet.create({
  detailPertanyaan: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#020202',
  },
  label: {
    fontWeight: 'bold',
  },

  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
