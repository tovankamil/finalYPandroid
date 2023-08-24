import React from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {
  scffieldjawabanRespondenbaru,
  scfjawabanRespondenbaru,
} from '../../../redux/action/subjawabanResponden';
import {useForm} from '../../../utils';
import {Gap, TextInputQA} from '../../atoms';

const SCFJAWABAN = ({idPertanyaan, namaResponden, idjawaban, tipe}) => {
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

    dispatch(scffieldjawabanRespondenbaru(datajawaban));
  }
  return (
    <View style={styles.boxSubJawaban}>
      <Gap width={5} />
      <TextInputQA
        label="Jawaban"
        placeholder=""
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
        width="70%"
      />
    </View>
  );
};

export default React.memo(SCFJAWABAN);

const styles = StyleSheet.create({
  boxSubJawaban: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
