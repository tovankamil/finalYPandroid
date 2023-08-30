import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {jawabanRespondenbaru} from '../../../redux/action/jawabanResponden';
import {subjawabanRespondenbaru} from '../../../redux/action/subjawabanResponden';
import {useForm} from '../../../utils';
import {Gap, TextInputQA} from '../../atoms';

const MSUBJAWABAN = ({
  idPertanyaan,
  namaResponden,
  idjawaban,
  tipe,
  placeholder,
}) => {
  let index;
  const dispatch = useDispatch();
  const selector = useSelector(state => state.subjawabanRespondenReducer);
  if (selector.data_jawaban?.length > 0) {
    index = selector.data_jawaban.findIndex(d => {
      return d.idjawaban === idjawaban;
    });
    console.log('selector', index);
  }

  const [form, setForm] = useForm({
    jawaban:
      selector.data_jawaban?.length > 0
        ? selector.data_jawaban[index]?.subjawaban
        : '',
  });
  useEffect(() => {
    let datajawaban = {
      idPertanyaan,
      namaResponden,
      idjawaban,
      tipe,
      checked: true,
      fieldjawaban: '',
      subjawaban: form.jawaban,
    };
    dispatch(subjawabanRespondenbaru(datajawaban));

    return () => {};
  }, [form]);

  return (
    <View style={styles.boxSubJawaban}>
      <Gap width={5} />
      <TextInputQA
        label="Jawaban"
        placeholder={placeholder}
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
