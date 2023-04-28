import React, {useEffect, useState} from 'react';
import {Text, StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Gap, TextInput} from '..';
import {getData, useForm} from '../../../utils';

const FormProfilKoresponden = () => {
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
  const [user, setUser] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    ToDispatch();
  }, [form]);
  const ToDispatch = () => {
    dispatch({type: 'SET_PROFILE_KORESPONDEN', value: form});
  };

  return (
    <View>
      {/* INPUT NAMA */}
      <TextInput
        label="Nama"
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
      {errordata.usiaEr != '' && <Span label={errordata.usiaEr} />}
      <Gap height={14} />

      {/* NIK */}
      <TextInput
        label="Nik"
        placeholder="Masukan Nik 16 Digit"
        value={form.nik}
        onChangeText={value => setForm('nik', value)}
        numeric="numeric"
      />
      {errordata.nikEr != '' && <Span label={errordata.nikEr} />}
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
    </View>
  );
};

export default React.memo(FormProfilKoresponden);
