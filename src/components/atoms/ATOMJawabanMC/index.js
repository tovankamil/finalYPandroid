import CheckBox from '@react-native-community/checkbox';
import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {jawabanRespondenbaru} from '../../../redux/action/jawabanResponden';
import {subjawabanRespondenbaru} from '../../../redux/action/subjawabanResponden';
import {MSUBJAWABAN} from '../../molecules';
import Gap from '../Gap';

const ATOMJawabanMC = ({
  data,
  idPertanyaan,
  namaResponden,
  idjawaban,
  keydata,
  placeholder,
  tipe,
  subjawaban,
  check,
  dataquestion,
}) => {
  const dispatch = useDispatch();
  let index = 0;
  const selector = useSelector(state => state.questionReducer);
  const cek = id => {
    const cekdata = selector?.dataQuestion?.findIndex(d => {
      return d._id === idPertanyaan;
    });

    const finindex = selector.dataCheckList.findIndex(d => {
      return d.idJawaban === idjawaban;
    });
    selector.dataCheckList[finindex].isChecked =
      selector.dataCheckList[finindex].isChecked === false ? true : false;
    let datajawaban = {
      idPertanyaan,
      namaResponden,
      idjawaban,
      tipe,
      checked: selector.dataCheckList[finindex].isChecked,
      fieldjawaban: '',
      subjawaban: '',
    };
    dispatch({type: 'UPDATE_CHECKED', value: selector.dataCheckList[finindex]});
    dispatch(jawabanRespondenbaru(datajawaban));
    dispatch(subjawabanRespondenbaru(datajawaban));
  };

  const cekdata = selector.dataCheckList.findIndex(d => {
    return d.idJawaban === idjawaban;
  });

  const SubJawaban = ({data}) => {
    if (
      subjawaban == 'y' &&
      selector.dataCheckList[cekdata]?.isChecked === true
    ) {
      return (
        <View style={styles.boxSubJawaban}>
          <Text>{data.namaJawaban}</Text>

          <MSUBJAWABAN
            idjawaban={idjawaban}
            idPertanyaan={idPertanyaan}
            namaResponden={namaResponden}
            tipe={tipe}
            placeholder={placeholder}
          />
        </View>
      );
    }
    return (
      <View style={styles.boxSubJawaban}>
        <Text>{data.namaJawaban}</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <Gap height={2} />
      <View style={styles.detailPertanyaan}>
        <View style={styles.boxContainer}>
          <CheckBox
            key={keydata}
            value={
              selector.dataCheckList[cekdata]?.isChecked === 'undefined'
                ? false
                : selector.dataCheckList[cekdata]?.isChecked
            }
            style={styles.checkbox}
            onValueChange={() => {
              cek(keydata);
            }}
            tintColors={{true: 'green', false: '#ddd'}}
          />
          {<SubJawaban data={data} />}
        </View>
      </View>
    </View>
  );
};

export default React.memo(ATOMJawabanMC);
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  boxSubJawaban: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  detailPertanyaan: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: '#020202',
  },
  boxContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
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
