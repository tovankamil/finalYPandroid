import React from 'react';
import {Text} from 'react-native';
import {StyleSheet} from 'react-native';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {fieldjawabanRespondenbaru} from '../../../redux/action/fieldjawabanResponden';
import {useForm} from '../../../utils';
import {Button, Gap, TextInputQA} from '../../atoms';
import JenisKelamin from './JenisKelamin';

const MSUBJAWABANFORM = ({
  idPertanyaan,
  namaResponden,
  idjawaban,
  tipe,
  placeholder,
  width,
  dataJenisKelaminX,
}) => {
  const dispatch = useDispatch();
  //   const dataJenisKelamin = useSelector(
  //     state => state.qaloadidentitaslainnyareducer,
  //   );
  const [form, setForm] = useForm({
    nama: '',
    umur: '',
    hp: '',
    jk: '',
    agama: '',
  });
  const submit = () => {
    let jeniskelamin;
    if (dataJenisKelaminX?.dataJK?.length > 0) {
      const findIndex = dataJenisKelaminX?.dataJK?.findIndex((d, i) => {
        return d.isChecked === true;
      });

      if (findIndex >= 0) {
        jeniskelamin = dataJenisKelaminX?.dataJK[findIndex].txt;
      }
    }
    form['jk'] = jeniskelamin ?? '';
    if (form.nama.length > 0) {
      let datajawaban = {
        idPertanyaan,
        namaResponden,
        idjawaban,
        tipe,
        checked: true,
        fieldjawaban: '',
        subjawaban: '',
        jawabanForm: form,
      };
      setForm({
        nama: '',
        umur: '',
        hp: '',
        jk: '',
        agama: '',
      });
      dispatch(fieldjawabanRespondenbaru(datajawaban));
    }
  };

  return (
    <View style={styles.boxSubJawaban}>
      <Text>Nama</Text>
      <Gap height={8} />
      <TextInputQA
        label="nama"
        placeholder={placeholder}
        value={form.jawaban}
        onChangeText={value => setForm('nama', value)}
        width={width}
      />

      <Gap height={15} />
      <Text>Umur</Text>
      <Gap height={8} />
      <TextInputQA
        label="umur"
        placeholder={placeholder}
        value={form.umur}
        onChangeText={value => setForm('umur', value)}
        width={width}
        numeric="numeric"
      />

      <Gap height={15} />
      <Text>Hp</Text>
      <Gap height={8} />
      <TextInputQA
        label="hp"
        placeholder={placeholder}
        value={form.hp}
        onChangeText={value => setForm('hp', value)}
        width={width}
      />

      <Gap height={15} />
      <JenisKelamin
        identitasLainnya={true}
        dataJenisKelaminX={dataJenisKelaminX}
      />
      <Gap height={15} />
      <Text>Agama</Text>
      <Gap height={8} />
      <TextInputQA
        label="agama"
        placeholder={placeholder}
        value={form.agama}
        onChangeText={value => setForm('agama', value)}
        width={width}
      />
      <Gap height={35} />
      <Button
        text="Tambah Identitas Lain"
        color="red"
        textColor="#F9F9F9"
        onPress={submit}
      />
    </View>
  );
};

export default React.memo(MSUBJAWABANFORM);

const styles = StyleSheet.create({
  inputjawaban: {
    paddingVertical: 15,
  },
  formdata: {
    display: 'flex',
    flexDirection: 'column',
  },
});
