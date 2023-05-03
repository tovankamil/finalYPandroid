import React, {useEffect} from 'react';
import Axios from 'axios';
import {StyleSheet, Text, View} from 'react-native';
import {Button, Gap, Header, TextInput} from '../../components';
import {getData, useForm} from '../../utils';
import {useDispatch, useSelector} from 'react-redux';
import {signInAction} from '../../redux/action/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {removeData} from '../../utils';
import {ICSplashScreen} from '../../assets';
const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();
  useEffect(() => {
    getData('token').then(res => {
      if (res) {
        navigation.reset({index: 0, routes: [{name: 'Home'}]});
      }
    });
  });
  const onSubmit = () => {
    // REMOVE TOKEN
    removeData('token');
    removeData('userProfile');
    dispatch(signInAction(form, navigation));
  };

  return (
    <View style={styles.page}>
      <View style={styles.boxImage}>
        <ICSplashScreen style={styles.image} />
      </View>

      <View style={styles.container}>
        <TextInput
          label="Username"
          placeholder="Masukan Username"
          value={form.nik}
          onChangeText={value => setForm('username', value)}
        />
        <Gap height={16} />
        <TextInput
          label="Password"
          placeholder="Masukan Password"
          value={form.password}
          onChangeText={value => setForm('password', value)}
          secureTextEntry
        />
        <Gap height={26} />
        <Button
          text="Masuk"
          color="#0EA137"
          textColor="#F9F9F9"
          onPress={onSubmit}
        />
        <Gap height={14} />
        <Button
          text="Buat Akun Baru"
          color="#8D92A3"
          textColor="#F9F9F9"
          onPress={() => navigation.navigate('SignUp')}
        />
      </View>
    </View>
  );
};

export default SignIn;
const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
  },
  boxImage: {
    justifyContent: 'center',
    width: '100%',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 0,
    flex: 1,
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
