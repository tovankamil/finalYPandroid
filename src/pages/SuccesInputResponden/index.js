import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {View} from 'react-native';
import {Button} from '../../components';

const SuccesInputResponden = () => {
  const navigation = useNavigation();
  return (
    <View>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate('DataKoresponden')}
        text="Simpan"
        textColor="#F9F9F9"
        color="green"
      />
    </View>
  );
};

export default SuccesInputResponden;
const styles = StyleSheet.create({
  container: {
    padding: 15,
  },
  boxH1: {
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  H1: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  content: {
    flex: 1,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  boxButton: {
    padding: 10,
    width: '50%',
    justifyContent: 'center',
  },
  button: {
    color: 'red',
  },
  FlexButton: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  boldText: {
    color: 'green',
    fontWeight: 'bold',
  },
});
