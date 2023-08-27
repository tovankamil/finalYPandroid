import React, {useEffect} from 'react';
import {Text, View, Image, StyleSheet} from 'react-native';
import {ICSplashScreen} from '../../assets';

const SplashScreen = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      // navigation.replace('SignIn');
      navigation.replace('IdentitasResponden');
    }, 1000);
  });

  return (
    <View
      style={{
        backgroundColor: '#FDFDFD',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {/* <Image source={ICSplashScreen} style={styles.image} /> */}
      <ICSplashScreen style={styles.image} />
      <View />
      <Text
        style={{fontSize: 25, color: '#626262', fontFamily: 'Poppins-medium'}}
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
