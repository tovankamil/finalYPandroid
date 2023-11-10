import React, {useEffect} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useDispatch} from 'react-redux';
import {BOXLogo} from '../../assets';
import {setLogout, setTabindexinputkoresponden} from '../../redux/action';
import {getData} from '../../utils';

const SplashScreen = ({navigation}) => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setLogout(false));
    dispatch(dispatch(setTabindexinputkoresponden(0)));
    dispatch({type: 'SET_RESET_SETTING_RELAWAN'});
    getData('token').then(res => {
      if (res) {
        navigation.reset({index: 0, routes: [{name: 'MainApp'}]});
      } else {
        navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
      }
    });
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
      <Image source={BOXLogo} style={styles.image} />
      {/* <ICSplashScreen style={styles.image} /> */}
      <View />
      <Text
        style={{
          fontSize: 25,
          color: '#626262',
          marginTop: 15,
          fontFamily: 'Poppins-medium',
        }}
      >
        YANUAR PRIHATIN
      </Text>
    </View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  border: {
    backgroundColor: '##f7f7f7',
  },
  image: {
    width: '75%',
    height: 150,
  },
});
