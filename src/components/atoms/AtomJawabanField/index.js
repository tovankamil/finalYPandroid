import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fieldjawabanRespondenbaru} from '../../../redux/action/fieldjawabanResponden';

import {useForm} from '../../../utils';
import Gap from '../Gap';
import TextInputQA from '../TextInputQA';

const AtomJawabanField = ({idPertanyaan, namaResponden, tipe, formdata}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    jawaban: '',
  });

  if (form.jawaban.length > 0) {
    let datajawaban = {
      idPertanyaan,
      namaResponden,
      idjawaban: '',
      tipe,
      checked: false,
      fieldjawaban: form.jawaban,
      subjawaban: '',
      jawabanForm: [],
    };
    dispatch(fieldjawabanRespondenbaru(datajawaban));
  }
  const fFormData = () => {
    return formdata && form.jawaban > 0 ? <FormSubJawaban /> : '';
  };
  return (
    <View style={styles.inputjawaban}>
      <TextInputQA
        label="Jawaban"
        placeholder=""
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
        width="100%"
      />
      {fFormData()}
    </View>
  );
};

export default React.memo(AtomJawabanField);
const FormSubJawaban = (
  idPertanyaan,
  namaResponden,
  idjawaban,
  tipe,
  placeholder,
) => {
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
        placeholder={placeholder}
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
        width="70%"
      />
    </View>
  );
};
const styles = StyleSheet.create({
  inputjawaban: {
    paddingVertical: 15,
  },
});
