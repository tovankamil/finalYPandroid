import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {scffieldjawabanRespondenbaru} from '../../../redux/action/subjawabanResponden';
import {useForm} from '../../../utils';
import {Gap, TextInputQA} from '../../atoms';

const SCFJAWABAN = ({
  idPertanyaan,
  namaResponden,
  idjawaban,
  tipe,
  placeholder,
}) => {
  let index;
  const dispatch = useDispatch();
  const scf = useSelector(state => state.scfsubjawabanResponden);
  if (scf.data_jawaban.length > 0) {
    index = scf.data_jawaban.findIndex(d => {
      return d.idjawaban === idjawaban;
    });
  }

  const [form, setForm] = useForm({
    jawaban:
      scf.data_jawaban.length > 0 ? scf.data_jawaban[index]?.subjawaban : '',
  });

  useEffect(() => {
    if (form.jawaban && form.jawaban.length > 0) {
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
  }, [form]);
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
