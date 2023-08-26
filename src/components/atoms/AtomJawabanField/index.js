import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fieldjawabanRespondenbaru} from '../../../redux/action/fieldjawabanResponden';

import {useForm} from '../../../utils';
import {MSUBJAWABANFORM} from '../../molecules';
import Gap from '../Gap';
import TextInputQA from '../TextInputQA';

const AtomJawabanField = ({idPertanyaan, namaResponden, tipe, formdata}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    jawaban: '',
  });
  const dataJenisKelamin = useSelector(
    state => state.qaloadidentitaslainnyareducer,
  );
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

  // const fFormData = () => {
  //   return
  // };
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
      <View>
        {formdata && form.jawaban > 0 ? (
          <>
            <View style={styles.formdata}>
              <Text style={styles.identitaslainnya}>Identitas Lainnya</Text>
              <Gap height={25} />
              <MSUBJAWABANFORM
                idPertanyaan={idPertanyaan}
                namaResponden={namaResponden}
                tipe={tipe}
                formdata={formdata}
                dataJenisKelaminX={dataJenisKelamin}
              />
            </View>
          </>
        ) : (
          ''
        )}
      </View>
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
