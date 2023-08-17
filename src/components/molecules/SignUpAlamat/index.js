import React, { useEffect } from 'react';
import {View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from '../../../utils';
import {TextInput} from '../../atoms';

const SignUpAlamat = () => {
  const [formAlamat, setFormAlamat] = useForm({
    alamat: '',
  });

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch({type: 'SET_ALAMAT', value: formAlamat});
  }, [formAlamat]);


  return (
    <View>
      <TextInput
        label="Alamat"
        placeholder="Masukan Alamat"
        value={formAlamat.alamat}
        onChangeText={value => setFormAlamat('alamat', value)}
      />
    </View>
  );
};
export default SignUpAlamat;
