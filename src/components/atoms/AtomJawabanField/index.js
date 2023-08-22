import React from 'react';
import {Text, View} from 'react-native';
import {useForm} from '../../../utils';
import TextInput from '../TextInput';

const AtomJawabanField = ({idPertanyaan, namaResponden}) => {
  const [form, setForm] = useForm({
    idPertanyan: '',
    idrepsonden: '',
    jawaban: '',
  });
  return (
    <View>
      <TextInput
        label=""
        placeholder="Masukan jawaban anda"
        value={form.name}
        onChangeText={value => setForm('jawaban', value)}
      />
    </View>
  );
};

export default React.memo(AtomJawabanField);
