import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {jeniskelamin} from '../../../constants/QA';
import {setLoadingJK} from '../../../redux/action/qa';
import {Gap, ATOMJK} from '../../atoms';

const JenisKelamin = () => {
  const dispatch = useDispatch();
  const dataJenisKelamin = useSelector(state => state.qaloadreducer);
  console.log('dataJenisKelamin', dataJenisKelamin);
  useEffect(() => {
    dispatch(setLoadingJK(jeniskelamin));
  }, []);
  return (
    <View>
      <Text style={styles.label}>Jenis Kelamin</Text>
      {jeniskelamin.map((dt, index) => {
        console.log('dd', dt);
        return (
          <>
            <ATOMJK
              label={dt.txt}
              // noParent={i}
              isChecked={dt.isChecked}
              dataQA={dataJenisKelamin.dataJK}
              key={index}
              keydata={index}
            />
            <Gap width={10} />
          </>
        );
      })}
    </View>
  );
};

export default React.memo(JenisKelamin);

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    fontFamily: 'Poppins-Medium',
  },
  label: {
    fontSize: 13,
    fontFamily: 'Poppins-Medium',
    color: '#020202',
    marginBottom: 6,
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
