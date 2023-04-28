import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BottomNavigator, Button, Gap, MenuHome} from '../../components';
import {getData, removeData} from '../../utils';

const HomeData = ({navigation}) => {
  const [user, setUser] = useState({});

  useEffect(() => {
    getData('userProfile').then(data => {
      setUser(data);
    });
  }, []);

  const dataProfile = () => {
    getData;
  };
  const onSubmit = () => {
    removeData('token');
    removeData('userProfile');
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  };

  return (
    <View style={styles.page}>
      <View style={styles.boxName}>
        <Text style={styles.name}>{user && user?.nama}</Text>
        <Gap height={1} />
        <Text style={styles.subtitle}>Relawan</Text>
      </View>

      {/* <Button text="Keluar"  color = '#0EA137'  textColor = '#F9F9F9'   onPress={onSubmit}/> */}
      <Gap height={12} />

      {/* Selamat Datang */}
      <View></View>
      {/* Menu */}
      <View style={styles.containerMenu}>
        <Gap height={5} />
        <MenuHome
          title="Data Koresponden"
          onPress={() => navigation.navigate('DataKoresponden')}
        />
        <Gap height={5} />
        <MenuHome
          title="Data Relawan"
          onPress={() => navigation.navigate('home')}
        />
        <Gap height={5} />
        <MenuHome title="Profile" onPress={() => navigation.navigate('home')} />

        <Gap height={5} />
        <MenuHome title="Keluar" onPress={onSubmit} />
      </View>
    </View>
  );
};
export default HomeData;
const styles = StyleSheet.create({
  page: {flex: 1},
  boxName: {
    padding: 15,
    backgroundColor: 'white',
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-medium',
    color: '#020202',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 11,
  },
});
