import CheckBox from '@react-native-community/checkbox';
import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {setLoadingJKIdentitasLainnya} from '../../../redux/action/fieldjawabanResponden';

const ATOMJKIdentitasLainnya = ({
  label,

  dataQA,
  isChecked,
  keydata,
}) => {
  const dispatch = useDispatch();
  const cek = id => {
    dataQA.map((dataindex, index) => {
      dataindex.isChecked = false;
    });
    dataQA[keydata].isChecked = true;
    dispatch(setLoadingJKIdentitasLainnya(dataQA));
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

export default ATOMJKIdentitasLainnya;
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
