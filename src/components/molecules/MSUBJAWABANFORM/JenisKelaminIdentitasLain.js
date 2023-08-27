import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {jeniskelaminIdentitasLainnya} from '../../../constants/QA';
import {setLoadingJKIdentitasLainnya} from '../../../redux/action/fieldjawabanResponden';

import {ATOMJKIdentitasLainnya, Gap} from '../../atoms';

const JenisKelaminIdentitasLain = ({dataJenisKelaminX}) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLoadingJKIdentitasLainnya(jeniskelaminIdentitasLainnya));
  }, []);

  return (
    <View>
      <Text style={styles.label}>Jenis Kelamin</Text>
      {jeniskelaminIdentitasLainnya?.map((dt, index) => {
        return (
          <View key={index}>
            <ATOMJKIdentitasLainnya
              label={dt.txt}
              // noParent={i}
              isChecked={dt.isChecked}
              dataQA={dataJenisKelaminX.dataJK}
              key={index}
              keydata={index}
            />
            <Gap width={10} />
          </View>
        );
      })}
    </View>
  );
};

export default React.memo(JenisKelaminIdentitasLain);

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
