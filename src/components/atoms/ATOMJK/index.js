import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoadingJK} from '../../../redux/action/qa';

const ATOMJK = ({label, noParent, dataQA, isChecked, keydata}) => {
  const dispatch = useDispatch();
  const cek = id => {
    dataQA.map((dataindex, index) => {
      dataindex.isChecked = false;
    });
    dataQA[keydata].isChecked = true;
    dispatch(setLoadingJK(dataQA));
    dispatch({
      type: 'SET_NEWJK',
      value: dataQA,
    });
  };

  return (
    <View style={styles.detailPertanyaan}>
      <CheckBox
        key={keydata}
        value={isChecked}
        style={styles.checkbox}
        onValueChange={cek}
        tintColors={{true: 'green', false: '#ddd'}}
      />
      <Text>{label}</Text>
    </View>
  );
};

export default ATOMJK;
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
