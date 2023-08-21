import React, {useCallback, useEffect, useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  JenisKelamin,
  OIdentitasResponden,
  Span,
  TextInput,
} from '../../../components';
import {dataProvinsi} from '../../../redux/action';
import {useForm, showMessage} from '../../../utils';

const IdentitasResponden = ({navigation}) => {
  const globalState = useSelector(state => state.globalReducer);

  const [errordata, setErrordata] = useState({
    namaEr: '',
    nikEr: '',
    hpEr: '',
    alamatEr: '',
    usiaEr: '',
  });

  const [form, setForm] = useForm({
    nama: '',
    nik: '',
    alamat: '',
    usia: '',
    hp: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({
      type: 'RESET_PROVINSI',
    });
    dispatch(dataProvinsi());
    return () => {};
  }, []);
  const ToDispatch = () => {
    let checkData = '';

    if (form.nama.length <= 0) {
      return showMessage('Silahkan masukan nama responden', 'danger');
    }

    dispatch({type: 'SET_PROFILE_KORESPONDEN', value: form});
  };

  const DataProvinsi = useCallback(() => {
    return <OIdentitasResponden />;
  });
  const submit = useCallback(() => {
    ToDispatch();
    navigation.navigate('TentangPKB');
  }, [form]);
  return (
    <ScrollView>
      <View style={styles.content}>
        <Header
          title="Responden"
          subTitle="Form Responden"
          onBack={() => navigation.goBack()}
        />
        {/* Tab */}
        <View style={styles.container}>
          <View style={styles.boxH1}>
            <Text style={styles.H1}>Data Responden</Text>
          </View>
          <Gap height={14} />
          <View>
            {/* INPUT NAMA */}
            <TextInput
              label="Nama"
              sublabel="* Wajib diisi "
              placeholder="Masukan Nama"
              value={form.name}
              onChangeText={value => setForm('nama', value)}
            />
            {errordata.namaEr != '' && <Span label={errordata.namaEr} />}
            <Gap height={14} />

            {/* USIA */}
            <TextInput
              label="Usia"
              placeholder="Masukan Usia"
              value={form.usia}
              onChangeText={value => setForm('usia', value)}
              numeric="numeric"
            />
            {globalState?.usia != '' && <Span label={globalState?.usia} />}
            <Gap height={14} />

            {/* Jenis Kelamin */}
            <JenisKelamin />
            <Gap height={14} />

            {/* NIK */}
            <TextInput
              label="Nik"
              placeholder="Masukan Nik 16 Digit"
              value={form.nik}
              onChangeText={value => setForm('nik', value)}
              numeric="numeric"
            />
            {globalState?.nikError != '' && (
              <Span label={globalState?.nikError} />
            )}
            <Gap height={14} />

            {/* Hp */}
            <TextInput
              label="Hp"
              placeholder="Masukan Hp"
              value={form.hp}
              onChangeText={value => setForm('hp', value)}
              numeric="numeric"
            />
            {errordata.hpEr != '' && <Span label={errordata.hpEr} />}
            <Gap height={14} />

            {/* ALAMAT */}
            <TextInput
              label="Alamat"
              placeholder="Masukan Alamat"
              value={form.alamat}
              onChangeText={value => setForm('alamat', value)}
            />

            {errordata.alamatEr != '' && <Span label={errordata.alamatEr} />}
            <Gap height={14} />
            {DataProvinsi()}
            <Gap height={14} />
            <Button
              style={styles.button}
              onPress={submit}
              text="Selanjutnya"
              textColor="#F9F9F9"
              color="green"
            />
          </View>

          {/* end tab   */}
        </View>
      </View>
    </ScrollView>
  );
};

export default React.memo(IdentitasResponden);

const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  boxH1: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  H1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxButton: {
    padding: 10,
    width: '100%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
});
