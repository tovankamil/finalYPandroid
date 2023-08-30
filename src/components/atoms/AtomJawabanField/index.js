import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fieldjawabanRespondenbaru} from '../../../redux/action/fieldjawabanResponden';

import {useForm} from '../../../utils';
import Gap from '../Gap';
import TextInputQA from '../TextInputQA';

const AtomJawabanField = ({idPertanyaan, namaResponden, tipe, formdata}) => {
  const dispatch = useDispatch();
  const datafield = useSelector(state => state.fieldjawabanRespondenReducer);
  let index;
  if (datafield?.data_jawaban?.length > 0) {
    index = datafield?.data_jawaban?.findIndex(f => {
      return f.idPertanyaan === idPertanyaan;
    });
  }
  const [form, setForm] = useForm({
    jawaban:
      datafield?.data_jawaban?.length > 0
        ? datafield?.data_jawaban[index]?.fieldjawaban
        : '',
  });

  useEffect(() => {
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

    return () => {};
  }, [form]);
  return (
    <View style={styles.inputjawaban}>
      <TextInputQA
        label="Jawaban"
        placeholder=""
        value={form.jawaban}
        onChangeText={value => setForm('jawaban', value)}
        width="100%"
      />
      <Gap height={25} />
    </View>
  );
};

export default React.memo(AtomJawabanField);

const styles = StyleSheet.create({
  inputjawaban: {
    paddingVertical: 15,
  },
  formdata: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    borderColor: '#ddd',
  },
  identitaslainnya: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
