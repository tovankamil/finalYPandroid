import React, { useEffect } from 'react';
import { Text, View } from 'react-native';
import { useDispatch } from 'react-redux';
import { useForm } from '../../../utils';
import { TextInput } from '../../atoms';


const SignUpNik = ()=>{
       const [formNik, setFormNik] = useForm({
    nik: '',
  });
const dispatch = useDispatch();
  useEffect(()=>{

dispatch({type: 'SET_NIK', value: formNik});
  },[formNik]);

    return(
        <View>
             <TextInput
             numeric='numeric'
            label="Nik"
            placeholder="Masukan Nik "
            value={formNik.nik}
            onChangeText={value => setFormNik('nik', value)}
          />
        </View>
    )
}
export default SignUpNik;