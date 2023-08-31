import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, TextInput} from '../../components';
import {signInAction} from '../../redux/action/auth';
import {getData, useForm} from '../../utils';

import {ICSplashScreen} from '../../assets';
import {setLogout, setTabindexinputkoresponden} from '../../redux/action';
import {removeData} from '../../utils';
const SignIn = ({navigation}) => {
  const [form, setForm] = useForm({
    username: '',
    password: '',
  });
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setLogout(false));
    dispatch(dispatch(setTabindexinputkoresponden(0)));
    dispatch({type: 'SET_RESET_SETTING_RELAWAN'});
    getData('token').then(res => {
      if (res) {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
        // navigation.reset({index: 0, routes: [{name: 'IdentitasLain'}]});
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
        <Gap height={52} />
        <Button
          text="Masuk"
          color="#0EA137"
          textColor="#F9F9F9"
          onPress={onSubmit}
        />
        <Gap height={14} />
        <Button
          text="Daftar Relawan"
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
