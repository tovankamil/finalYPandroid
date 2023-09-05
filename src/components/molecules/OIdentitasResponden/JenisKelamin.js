import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {jeniskelamin} from '../../../constants/QA';
import {setLoadingJK} from '../../../redux/action/qa';
import {ATOMJK, Gap} from '../../atoms';

const JenisKelamin = () => {
  const dispatch = useDispatch();
  const dataJenisKelamin = useSelector(state => state.qaloadreducer);
  const globalState = useSelector(state => state.globalReducer);
  useEffect(() => {
    dispatch(setLoadingJK(dataJenisKelamin.dataJK));
  }, [globalState.successinput]);
  return (
    <View>
      <Text style={styles.label}>Jenis Kelamin</Text>
      {dataJenisKelamin.dataJK?.map((dt, index) => {
        return (
          <View key={index}>
            <ATOMJK
              label={dt.txt}
              // noParent={i}
              isChecked={dt.isChecked}
              dataQA={dataJenisKelamin.dataJK}
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
