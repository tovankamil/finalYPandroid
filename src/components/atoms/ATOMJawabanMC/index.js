import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
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

  tipe,
  subjawaban,
}) => {
  const dispatch = useDispatch();

  const [checked, setChecked] = useState(false);

  const cek = id => {
    setChecked(prev => !prev);
    let datajawaban = {
      idPertanyaan,
      namaResponden,
      idjawaban,
      tipe,
      checked: !checked,
      fieldjawaban: '',
      subjawaban: '',
    };
    // console.log('datajawaban', datajawaban);
    dispatch(jawabanRespondenbaru(datajawaban));
    dispatch(subjawabanRespondenbaru(datajawaban));
  };

  const SubJawaban = ({data}) => {
    if (subjawaban == 'y' && checked === true) {
      return (
        <View style={styles.boxSubJawaban}>
          <Text>{data.namaJawaban}</Text>

          <MSUBJAWABAN
            idjawaban={idjawaban}
            idPertanyaan={idPertanyaan}
            namaResponden={namaResponden}
            tipe={tipe}
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
            value={checked}
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
