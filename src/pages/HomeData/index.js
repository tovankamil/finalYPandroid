import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, Image, TouchableOpacity} from 'react-native';

import {
  ICKELUAR,
  ICPKORESPONDEN,
  ICPROFILE,
  ICSETTING,
  ICUser,
} from '../../assets';
import {BottomNavigator, Button, Gap, MenuHome} from '../../components';
import {getData, removeData} from '../../utils';
import {capitalizeFirstLetter} from '../../utils/firstCapital';
import {BarChart} from 'react-native-gifted-charts';
import {dataTopKota} from '../../redux/action/topkota';
import {useDispatch, useSelector} from 'react-redux';
const HomeData = ({navigation}) => {
  const dispatch = useDispatch();
  const globalTopkota = useSelector(state => state.topKotaReducer);
  const [user, setUser] = useState({});
  const [bardata, setBardata] = useState({});

  useEffect(() => {
    getData('userProfile').then(data => {
      setUser(data);
    });
    grepTopKota();
  }, []);

  const grepTopKota = () => {
    getData('token').then(data => {
      dispatch(dataTopKota(data));
    });
  };
  const onSubmit = () => {
    removeData('token');
    removeData('userProfile');
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});
  };
  const barData = [];
  let datafrontColor = ['blue', 'green', 'orange', 'red'];
  globalTopkota?.data?.data &&
    globalTopkota?.data?.data.map((d, i) => {
      let dataKota = {
        value: globalTopkota?.data.data[i].count,
        label: globalTopkota?.data.data[i]._id[0].nama,
        frontColor: datafrontColor[i],
        sideColor: '#23A7F3',
        topColor: '#92e6f6',
      };
      console.log('globalTopkota', globalTopkota?.data.data[0]._id[0].nama);
      barData.push(dataKota);
    });
  //   console.log('globalTopkota', globalTopkota?.data.data[0].count);
  // console.log('globalTopkota', globalTopkota?.data.data[0]._id[0].nama);

  return (
    <View style={styles.page}>
      <View style={styles.topBoxProfile}>
        <ICUser />
        <View style={styles.boxName}>
          <Text style={styles.name}>
            Hi,
            {user &&
              user?.nama?.length > 0 &&
              capitalizeFirstLetter(user?.nama)}
          </Text>
          <Gap height={1} />
          <Text style={styles.subtitle}>Relawan</Text>
        </View>
      </View>

      {/* <Button text="Keluar"  color = '#0EA137'  textColor = '#F9F9F9'   onPress={onSubmit}/> */}
      <Gap height={20} />
      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          paddingHorizontal: 15,
          paddingRight: 8,
        }}
      >
        <View
          style={{display: 'flex', justifyContent: 'center', width: '100%'}}
        >
          <Text style={styles.labelTopKota}>Top Daerah Koresponden</Text>
        </View>
        <BarChart
          isAnimated
          isThreeD
          spacing={65}
          labelWidth={20}
          barWidth={20}
          barBorderRadius={4}
          frontColor="lightgray"
          data={barData}
          yAxisThickness={0}
          xAxisThickness={0}
          disableScroll={true}
          autoShiftLabels
          noOfSections={5}
        />
      </View>
      <Gap height={70} />
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.borderData}
          onPress={() => navigation.navigate('DataKoresponden')}
        >
          <Image source={ICPKORESPONDEN} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.borderData}
          // onPress={() => navigation.navigate('DataKoresponden')}
        >
          <Image source={ICPROFILE} style={styles.image} />
        </TouchableOpacity>
      </View>
      <Gap height={75} />
      <View style={styles.containerMenu}>
        <TouchableOpacity
          style={styles.borderData}
          onPress={() => navigation.navigate('Setting')}
        >
          <Image source={ICSETTING} style={styles.image} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.borderData} onPress={onSubmit}>
          <Image source={ICKELUAR} style={styles.image} />
        </TouchableOpacity>
      </View>

      {/* <View style={styles.containerMenu}>
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
      </View> */}
    </View>
  );
};
export default HomeData;
const styles = StyleSheet.create({
  labelTopKota: {
    fontSize: 16,
    textAlign: 'center',
    width: '100%',
    fontWeight: 'bold',
  },
  borderData: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    shadowColor: '#000000',
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.81,
    elevation: 12,
  },
  page: {flex: 1},
  boxName: {
    padding: 15,
    backgroundColor: '#153606',
  },
  containerMenu: {
    paddingHorizontal: 25,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  topBoxProfile: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#153606',
    paddingLeft: 15,
  },
  name: {
    fontSize: 18,
    fontFamily: 'Poppins-medium',
    color: '#D0D0D0',
    textAlign: 'left',
  },
  subtitle: {
    fontSize: 10,
    color: '#918D8D',
  },
  image: {
    width: 93,
    height: 105,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
  },
});
