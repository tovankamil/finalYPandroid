import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {scfjawabanRespondenbaru} from '../../../redux/action/subjawabanResponden';
import {SCFJAWABAN} from '../../molecules';
import Gap from '../Gap';

const ATOMSCF = ({
  data,
  idPertanyaan,
  namaResponden,
  idjawaban,
  keydata,
  check,
  tipesubjawaban,
  tipe,
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
      fieldjawaban: '',
      checked: !checked,
      subjawaban: '',
    };
    dispatch(scfjawabanRespondenbaru(datajawaban));
  };
  const SubJawaban = ({data}) => {
    if (tipesubjawaban == 'y') {
      return (
        <View style={styles.boxSubJawaban}>
          <SCFJAWABAN
            idjawaban={idjawaban}
            idPertanyaan={idPertanyaan}
            namaResponden={namaResponden}
            tipe={tipe}
          />
        </View>
      );
    }
    return <View style={styles.boxSubJawaban}></View>;
  };
  return (
    <View>
      <Gap height={2} />
      <View style={styles.detailPertanyaan}>
        <View style={styles.boxContainer}>
          <CheckBox
            key={keydata}
            value={check}
            style={styles.checkbox}
            onValueChange={() => {
              cek(keydata);
            }}
            tintColors={{true: 'green', false: '#ddd'}}
          />
          <Text>{data.namaJawaban}</Text>
          {<SubJawaban data={data} />}
        </View>
      </View>
    </View>
  );
};

export default ATOMSCF;

const styles = StyleSheet.create({
  detailPertanyaan: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    borderColor: '#020202',
  },
  boxContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
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
  boxSubJawaban: {
    width: '100%',
  },
});
