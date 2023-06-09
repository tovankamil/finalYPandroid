import React, {useEffect} from 'react';
import {Text} from 'react-native-svg';
import {removeData} from '../../utils';

const Keluar = ({navigation}) => {
  useEffect(() => {
    removeData('token');
    removeData('userProfile');
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
    return () => {};
  }, []);
  return <Text>Keluar</Text>;
};

export default Keluar;
