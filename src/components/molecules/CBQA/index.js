import React, {useEffect} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {useForm} from '../../../utils';
import {Gap, TextInput} from '../../atoms';

const CBQA = () => {
  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    qa1: '',
    qa2: '',
    qa3: '',
  });
  useEffect(() => {
    updateData();
  }, [form]);

  const updateData = () => {
    dispatch({
      type: 'SET_QA',
      value: {
        qa1: form.qa1,
        qa2: form.qa2,
        qa3: form.qa3,
      },
    });
  };

  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <TextInput
            label="Apakah anda mengenal Yanuar Prihatin?"
            value={form.qa1}
            onChangeText={value => setForm('qa1', value)}
          />
          <Gap height={14} />
          <TextInput
            label="Apakah anda bersedia memilih Yanuar Prihatin caleg anda 2024?"
            value={form.qa2}
            onChangeText={value => setForm('qa2', value)}
          />
          <Gap height={14} />
          <TextInput
            label="Apakah anda bersedia menjadi relawan untuk Yanuar Prihatin?"
            value={form.qa3}
            onChangeText={value => setForm('qa3', value)}
          />
          <Gap height={14} />
        </View>
      </View>
    </ScrollView>
  );
};

export default CBQA;

const styles = StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  tabView: {
    backgroundColor: 'white',
  },
});
