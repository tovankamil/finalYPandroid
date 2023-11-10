import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {Button, Gap, Header, TextInput} from '../../components';
import {lupPassword} from '../../redux/action';
import {useForm} from '../../utils';

const Lupapassword = ({navigation}) => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    username: '',
  });

  const onSubmit = () => {
    // REMOVE TOKEN

    dispatch(lupPassword(form, navigation));
  };
  return (
    <View style={styles.content}>
      <Header
        title="Reset Password"
        subTitle="Lupa password"
        onBack={() => navigation.goBack()}
      />

      <View style={styles.container}>
        <TextInput
          label="Masukan username atau no hp anda"
          placeholder=" Username / no hp"
          value={form.nik}
          onChangeText={value => setForm('username', value)}
        />

        <Gap height={52} />
        <Button
          text="Submit"
          color="#0EA137"
          textColor="#F9F9F9"
          onPress={onSubmit}
        />
        <Gap height={14} />
      </View>
    </View>
  );
};

export default Lupapassword;

const styles = StyleSheet.create({
  content: {
    flex: 1,
  },
  container: {
    backgroundColor: 'white',
    paddingHorizontal: 24,
    paddingVertical: 26,
    marginTop: 0,
    flex: 1,
    justifyContent: 'center',
  },
  input: {
    paddingHorizontal: 10,
    backgroundColor: 'white',
  },
});
