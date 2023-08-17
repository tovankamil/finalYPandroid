import React, {useMemo} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import {
  Button,
  Desa,
  Gap,
  Header,
  RadioButton,
  TextInput,
} from '../../components';
import Select from '../../components/atoms/Select';
import {useForm} from '../../utils';
import {Kota, dataKecamatan, dataDesa} from './data';
let dataPullKecamatan = {};
let dataPullDesa = {};
const SignUpAddress = ({navigation}) => {
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
    nama_desa: '',
    desa: '',
  });
  const [formAlamat, setFormAlamat] = useForm({
    alamat: '',
  });

  const [formNIk, setFormNIK] = useForm({
    nik: '',
  });

  // cari nama kota logik ambil data kecamatan

  if (form.kota > 0) {
    Kota.filter((data, index) => {
      if (data.id === form.kota) {
        form.nama_kota = data.value;
      }
    });
    dataPullKecamatan = dataKecamatan.filter((data, index) => {
      if (data.kabupaten_id === form.kota) {
        return data;
      }
    });
  }

  // cari nama Kecamatan  logik ambil data Desa

  if (form.kecamatan > 0) {
    dataPullDesa = dataDesa.filter((data, index) => {
      if (data.kecamatan_id === form.kecamatan) {
        form.nama_kecamatan = data.value;
        return data;
      }
    });
  }

  if (form.desa > 0) {
    dataPullDesa = dataDesa.filter((data, index) => {
      if (data.desa_id === form.desa) {
        form.nama_desa = data.value;
        return data;
      }
    });
  }
  const memoAlamat = useMemo(() => {
    return (
      <TextInput
        label="Alamat"
        placeholder="Masukan Alamat"
        value={formAlamat.alamat}
        onChangeText={value => setFormAlamat('alamat', value)}
      />
    );
  }, [setFormAlamat]);

  const memoKota = useMemo(() => {
    return (
      <Select
        label="Kota"
        value={form.kota}
        onSelectChange={value => setForm('kota', value)}
        namaSelect="Pilih Kota"
      />
    );
  }, [form.kota]);

  const memoKecamatan = useMemo(() => {
    return (
      <Select
        label="Kecamatan"
        value={form.kecamatan}
        datax={dataPullKecamatan}
        namaSelect="Pilih Kecamatan"
        onSelectChange={value => setForm('kecamatan', value)}
      />
    );
  }, [form.kecamatan, dataPullKecamatan]);

  const memoDesa = useMemo(() => {
    return (
      <Desa
        label="Kelurahan/Desa"
        value={form.desa}
        datax={dataPullDesa}
        onSelectChange={value => setForm('desa', value)}
        namaSelect="Pilih Desa"
      />
    );
  }, [form.desa, dataPullDesa]);

  const memoNik = useMemo(() => {
    return (
      <TextInput
        label="NIK"
        placeholder="Masukan Nik 16 digit"
        value={formNIk.nik}
        onChangeText={value => setFormNIK('nik', value)}
        numeric="numeric"
      />
    );
  }, [formNIk.nik]);

  const bsubmit = useMemo(() => {
    return <Button text="Submit" color="#0EA137" textColor="#F9F9F9" />;
  }, []);

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.page}>
        <Header
          title="Pendaftaran"
          subTitle="Form Pendaftaran Relawan"
          onBack={() => navigation.goBack()}
        />
        <View style={styles.container}>
          {memoAlamat}
          <Gap height={16} />
          {memoKota}
          <Gap height={15} />
          {memoKecamatan}
          {/* <Select
            label="Kecamatan"
            value={form.kecamatan}
            datax={dataPullKecamatan}
            namaSelect="Pilih Kecamatan"
            onSelectChange={value => setForm('kecamatan', value)}
          /> */}
          <Gap height={15} />
          {/* <Select
            label="Kelurahan/Desa"
            value={form.desa}
            datax={dataPullDesa}
            onSelectChange={value => setForm('kota', value)}
            namaSelect="Pilih Desa"
          /> */}
          {memoDesa}
          <Gap height={15} />
          {memoNik}
          <Gap height={16} />
          {bsubmit}
          <Gap height={14} />
        </View>
      </View>
    </ScrollView>
  );
};

export default SignUpAddress;
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
});
