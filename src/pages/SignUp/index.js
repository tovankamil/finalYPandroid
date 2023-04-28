import React, {useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  RadioButton,
  Span,
  TextInput,
} from '../../components';
import {
  removeSpecialCharacter,
  removeWhiteSpace,
  removeWhiteSpace2,
  useForm,
} from '../../utils';

const SignUp = ({navigation}) => {
  const RegisterReducer = useSelector(state => state.registerReducer);
  const [errordata, setErrordata] = useState({
    usernameEr: '',
    namaEr: '',
    passwordEr: '',
    hpEr: '',
    jenisKelaminEr: '',
    umurEr: '',
    koordinatorrEr: '',
  });

  const [form, setForm] = useForm({
    username: '',
    nama: '',
    password: '',
    hp: '',
    jenisKelamin: '',
    umur: '',
    koordinator: '',
  });

  // RADIO BUTTON
  const radioButtonsData = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Laki-laki',
      value: 'L',
    },
    {
      id: '2',
      label: 'Perempuan',
      value: 'P',
    },
  ];

  const Koordinator = [
    {
      id: '1', // acts as primary key, should be unique and non-empty string
      label: 'Kecamatan',
      value: 'KC',
    },
    {
      id: '2',
      label: 'Pedesaan',
      value: 'PD',
    },
  ];

  let msg = '';
  const dispatch = useDispatch();
  const onSubmit = () => {
    msg = '';
    setErrordata(errordata => ({
      errordata,
    }));
    if (form.username.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        usernameEr: 'Masukan username',
      }));
    }
    if (form.nama.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        namaEr: 'Masukan Nama',
      }));
    }
    if (form.password.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        passwordEr: 'Silahkan Masukan Password',
      }));
    }
    if (form.hp.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        hpEr: 'Masukan No HP Anda',
      }));
    }

    if (form.umur.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        umurEr: 'Masukan Umur anda',
      }));
    }
    if (form.jenisKelamin.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        jenisKelaminEr: 'Pilih Jenis Kelamin Anda',
      }));
    }
    if (form.koordinator.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        koordinatorEr: 'Pilih Koordinator Anda',
      }));
    }
    if (msg.length == 0) {
      dispatch({type: 'SET_REGISTER', value: form});
      navigation.navigate('SignUpAddress');
    }
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Pendaftaran"
          subTitle="Form Pendaftaran Relawan"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          <TextInput
            label="Username"
            placeholder="Masukan Username"
            value={form.username}
            onChangeText={value =>
              setForm(
                'username',
                removeSpecialCharacter(
                  removeWhiteSpace(removeWhiteSpace2(value)),
                ),
              )
            }
          />
          {errordata.usernameEr !== '' && <Span label={errordata.usernameEr} />}
          <Gap height={15} />
          <TextInput
            label="Nama"
            placeholder="Masukan Nama"
            value={form.name}
            onChangeText={value => setForm('nama', value)}
          />
          {errordata.namaEr !== '' && <Span label={errordata.namaEr} />}
          <Gap height={15} />
          <TextInput
            label="Password"
            placeholder="Masukan Password"
            onChangeText={value => setForm('password', value)}
            secureTextEntry
          />
          {errordata.passwordEr != '' && <Span label={errordata.passwordEr} />}
          <Gap height={16} />
          <TextInput
            label="Hp"
            placeholder="Masukan No HP contoh:082292301999"
            numeric="numeric"
            onChangeText={value => setForm('hp', value)}
          />
          {errordata.hpEr != '' && <Span label={errordata.hpEr} />}
          <Gap height={16} />
          <TextInput
            label="Umur"
            placeholder="Masukan umur contoh: 34"
            numeric="numeric"
            onChangeText={value => setForm('umur', value)}
          />
          {errordata.umurEr != '' && <Span label={errordata.umurEr} />}
          <Gap height={15} />

          <RadioButton
            labelRadio={radioButtonsData}
            label="Jenis Kelamin"
            form={form}
            setForm={setForm}
          />
          {errordata.jenisKelaminEr != '' && (
            <Span label={errordata.jenisKelaminEr} />
          )}
          <Gap height={15} />

          <RadioButton
            labelRadio={Koordinator}
            label="Koordinator"
            form={form}
            setForm={setForm}
          />
          {errordata.koordinatorEr != '' && (
            <Span label={errordata.koordinatorEr} />
          )}
          <Gap height={45} />
          <Button
            text="Selanjutnya"
            color="#0EA137"
            textColor="#F9F9F9"
            onPress={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUp;
const styles = StyleSheet.create({
  jenisKelaminContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  page: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 24,
    flex: 1,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: '#000000',
  },
});
