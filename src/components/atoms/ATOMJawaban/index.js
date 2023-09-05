import CheckBox from '@react-native-community/checkbox';
import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {jawabanRespondenbaru} from '../../../redux/action/jawabanResponden';
import Gap from '../Gap';

const ATOMJawaban = ({
  data,
  idPertanyaan,
  namaResponden,
  idjawaban,
  keydata,
  check,
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
      checked: check,
      subjawaban: '',
    };
    dispatch(jawabanRespondenbaru(datajawaban));
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
          <Text>
            {data.namaJawaban}
            {idPertanyaan}- {idjawaban}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ATOMJawaban;
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
