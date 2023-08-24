import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {jawabanRespondenbaru} from '../../../redux/action/jawabanResponden';
import {subjawabanRespondenbaru} from '../../../redux/action/subjawabanResponden';
import {useForm} from '../../../utils';
import {Gap, TextInputQA} from '../../atoms';

const MSUBJAWABAN = ({idPertanyaan, namaResponden, idjawaban, tipe}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    jawaban: '',
  });
  if (form.jawaban.length > 0) {
    let datajawaban = {
      idPertanyaan,
      namaResponden,
      idjawaban,
      tipe,
      checked: true,
      fieldjawaban: '',
      subjawaban: form.jawaban,
    };
    // console.log('datajawaban', datajawaban);
    dispatch(subjawabanRespondenbaru(datajawaban));
  }
  return (
    <View style={styles.boxSubJawaban}>
      <Gap width={5} />
      <TextInputQA
        label="Jawaban"
        placeholder=""
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
        width="75%"
      />
    </View>
  );
};

export default React.memo(MSUBJAWABAN);

const styles = StyleSheet.create({
  boxSubJawaban: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
