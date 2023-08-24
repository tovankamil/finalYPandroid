import React, {useEffect, useMemo} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {fieldjawabanRespondenbaru} from '../../../redux/action/fieldjawabanResponden';

import {useForm} from '../../../utils';
import TextInputQA from '../TextInputQA';

const AtomJawabanField = ({idPertanyaan, namaResponden, tipe}) => {
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
    };
    dispatch(fieldjawabanRespondenbaru(datajawaban));
  }

  return (
    <View style={styles.inputjawaban}>
      <TextInputQA
        label="Jawaban"
        placeholder=""
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
      />
    </View>
  );
};

export default React.memo(AtomJawabanField);

const styles = StyleSheet.create({
  inputjawaban: {
    paddingVertical: 15,
  },
});
