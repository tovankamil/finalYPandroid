import React, {useMemo, useState} from 'react';
import {StyleSheet, ScrollView, View, Text} from 'react-native';
import {useSelector} from 'react-redux';
import {
  Button,
  Gap,
  Header,
  SignUpAlamat,
  SignUpNik,
  SignUpProvinsi,
} from '../../components';
import {useForm} from '../../utils';

const SignUpAddress = ({navigation}) => {
  const globalState2 = useSelector(state => state.registerReducer);

  const [form, setForm] = useForm({
    nama_kota: '',
    id_kota: '',
  });

  // const [form, setForm] = useForm({
  //   nama_kota: '',
  //   kota: '',
  //   nama_kecamatan: '',
  //   kecamatan: '',
  //   nama_desa: '',
  //   desa: '',
  // });
  const [errordata, setErrordata] = useState({
    error: '',
  });

  const dSignUpNik = useMemo(() => {
    return <SignUpNik />;
  }, []);
  const dSignUpAlamat = useMemo(() => {
    return <SignUpAlamat />;
  }, []);

  const dSignUpProvinsi = useMemo(() => {
    return (
      <SignUpProvinsi
        dataPullKecamatan
        dataPullDesa
        Kota
        dataKecamatan
        dataDesa
      />
    );
  }, []);
  let msg = '';
  const onSubmit = () => {
    setErrordata({error: ''});
    if (globalState2?.alamat?.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Mohon Masukan Alamat',
      }));
    } else if (globalState2?.nama_kota?.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Pilih Kota Terlebih Dahulu',
      }));
    } else if (globalState2?.nama_kecamatan?.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Pilih Kecamatan Terlebih Dahulu',
      }));
    } else if (globalState2?.nama_desa.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Pilih Desa Terlebih Dahulu',
      }));
    } else if (globalState2?.nik.length == 0) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Mohon Masukan NIK Anda',
      }));
    } else if (globalState2?.nik.length != 16) {
      msg = 'error';
      setErrordata(errordata => ({
        ...errordata,
        error: 'Mohon Masukan NIK Anda 16 digit',
      }));
    } else {
      setErrordata(errordata => ({
        ...errordata,
        error: '',
      }));
    }
    msg?.length == 0 && navigation.navigate('ValidasiSignUp');
  };

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <Header
        title="Pendaftaran"
        subTitle="Form Pendaftaran Relawan"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.page}>
          <Text style={styles.error}>
            {' '}
            {errordata.error && `Error :${errordata.error}`}
          </Text>
          {dSignUpNik}

          <Gap height={13} />
          {dSignUpAlamat}
          {dSignUpProvinsi}
          <Gap height={16} />
          <Gap height={46} />
          <Button
            text="Submit"
            color="#0EA137"
            textColor="#F9F9F9"
            onPress={onSubmit}
          />
          <Gap height={16} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;
const styles = StyleSheet.create({
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
  error: {
    color: 'red',
  },
});
