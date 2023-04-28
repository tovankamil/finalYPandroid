import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {BOXLogo} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.replace('SignIn');
    }, 1000);
  });

  return (
    <View
      style={{
        backgroundColor: '#0EA137',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Image source={BOXLogo} style={styles.image} />

      <View />
      <Text
        style={{fontSize: 25, color: '#FDFDFD', fontFamily: 'Poppins-medium'}}
      >
        Data Sukses
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  border: {
    backgroundColor: '#E3E3E3',
  },
  image: {
    width: 300,
    height: 300,
  },
});
