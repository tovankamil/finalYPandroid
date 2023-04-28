import React, {useState} from 'react';
import {Text, StyleSheet, View, TextInput as TextInputRN} from 'react-native';
import RadioGroup from 'react-native-radio-buttons-group';
import {useDispatch, useSelector} from 'react-redux';

const RadionButton = ({labelRadio, label,form,setForm}) => {
  const RegisterReducer = useSelector(state => state.registerReducer);
  const [radioButtons, setRadioButtons] = useState(labelRadio);
  const dispatch = useDispatch();
  function onPressRadioButton(radioButtonsArray) {
    setRadioButtons(radioButtonsArray);
    radioButtonsArray.map((val, i) => {
      if (val.selected) {

        if(val.value==='L' || val.value==='P' )
        {
           setForm('jenisKelamin',val.value);
        // dispatch({type: 'SET_REGISTER', value: form});
        }
        if(val.value==='KC' || val.value==='PD' )
        {
           setForm('koordinator',val.value);
          // dispatch({type: 'SET_REGISTER', value: form});
        }
      }
    });
  }
  return (
    <View style={styles.jenisKelaminContainer}>
      <Text style={styles.label}>{label}</Text>
      <RadioGroup
        radioButtons={radioButtons}
        onPress={onPressRadioButton}
        layout="row"
        containerStyle={{
          justifyContent: 'flex-start',
          alignItems: 'flex-start',
          padding: 0,
          margin: 0,
        }}
      />
    </View>
  );
};

export default RadionButton;

const styles = StyleSheet.create({
  jenisKelaminContainer: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
  },
  label: {
    fontSize: 16,
    fontFamily: 'Poppins-reguler',
    color: 'black',
    marginBottom: 10,
  },
});
