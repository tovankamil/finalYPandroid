import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Text} from 'react-native-svg';
import {useDispatch} from 'react-redux';
import {jeniskelamin} from '../../../constants/QA';

const JenisKelamin = () => {
  return (
    <View>
      <Text>testxxxxxxxxr</Text>
    </View>
  );
};

export default JenisKelamin;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 10,
    color: 'black',
    fontSize: 15,
    fontFamily: 'Poppins-Medium',
  },
});
