import React, {useCallback, useEffect, useState} from 'react';
import {RefreshControl, ScrollView, StyleSheet, Text, View} from 'react-native';

import {BarChart} from 'react-native-gifted-charts';
import {useDispatch, useSelector} from 'react-redux';
import {ICUser} from '../../assets';
import {Gap} from '../../components';
import {dataTopKota} from '../../redux/action/topkota';
import {getData} from '../../utils';
import {capitalizeFirstLetter} from '../../utils/firstCapital';
const HomeData = ({navigation}) => {
  const dispatch = useDispatch();
  const globalTopkota = useSelector(state => state.topKotaReducer);
  const [user, setUser] = useState({});
  const [bardata, setBardata] = useState({});
  const [refreshing, setRefreshing] = React.useState(false);

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

  const barData = [];
  let datafrontColor = [
    'blue',
    'green',
    'orange',
    'red',
    'purple',
    'gray',
    'black',
    'burlywood',
    'brown',
  ];
  globalTopkota?.data?.data &&
    globalTopkota?.data?.data.map((d, i) => {
      if (i < 9) {
        let dataKota = {
          value: globalTopkota?.data.data[i].count,
          // label: globalTopkota?.data.data[i]._id[0].nama,
          frontColor: datafrontColor[i],
          sideColor: '#23A7F3',
          topColor: '#92e6f6',
        };
        barData.push(dataKota);
      }
    });
  const refreshdata = useCallback(() => {
    setRefreshing(true);
    getData('token')
      .then(data => {
        dispatch(dataTopKota(data));
      })
      .catch(err => console.log('data', err));
    setTimeout(() => {
      setRefreshing(false);
    }, 1);
  }, []);
  const submit = index => {
    globalTopkota?.data?.data &&
      globalTopkota?.data?.data.map((d, i) => {
        if (i === index) {
          console.log('submit', index);
        }
      });
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={refreshdata} refreshing={refreshing} />
      }
    >
      <View style={styles.page}>
        <View style={styles.topBoxProfile}>
          <ICUser />
          <View style={styles.boxName}>
            <Text style={styles.name}>
              Hi,
              <Text style={styles.namepasi}>
                {user &&
                  user?.nama?.length > 0 &&
                  capitalizeFirstLetter(user?.nama)}
              </Text>
            </Text>
            <Gap height={1} />
            <Text style={styles.subtitle}>Relawan</Text>
          </View>
        </View>

        <Gap height={10} />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
          }}
        >
          <View style={{display: 'flex', justifyContent: 'center'}}>
            <Text style={styles.labelTopKota}>
              Data kecamatan responden terbanyak
            </Text>
          </View>

          <View style={{backgroundColor: 'white', marginTop: 15, padding: 5}}>
            <BarChart
              xAxisColor={'#c919ff'}
              isAnimated
              isThreeD
              initialSpacing={9}
              spacing={29.5}
              labelWidth={0}
              barWidth={10}
              barBorderRadius={4}
              frontColor="lightgray"
              data={barData}
              yAxisThickness={0}
              xAxisThickness={0}
              disableScroll={true}
              noOfSections={8}
              backgroundColor="white"
              onPress={(item, index) => submit(index)}
            />
          </View>
        </View>
        <Gap height={8} />
        <View style={styles.containerMenu}>
          <Text>Legend :</Text>
          <View style={styles.boxPage}>
            {globalTopkota?.data?.data &&
              globalTopkota?.data?.data.map((d, i) => {
                if (i < 9) {
                  return (
                    <>
                      <View style={styles.boxLegend} key={i}>
                        <View style={styles.legend}>
                          <View style={styles.kotak(datafrontColor[i])}></View>
                          <View>
                            <Text>
                              {globalTopkota?.data.data[i]._id[0].nama}
                            </Text>
                          </View>
                        </View>
                        <View style={styles.rounded}>
                          <Text style={styles.countLegend}>
                            {globalTopkota?.data.data[i].count}
                          </Text>
                        </View>
                      </View>
                    </>
                  );
                }
              })}
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
export default HomeData;
const styles = StyleSheet.create({
  boxPage: {
    display: 'flex',
    flexDirection: 'column',
  },
  boxLegend: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 10,
    marginTop: 8,
  },
  legend: {
    display: 'flex',
    flexDirection: 'row',
    gap: 10,
    alignItems: 'baseline',
    justifyContent: 'center',
  },
  countLegend: {
    fontSize: 12,
    fontWeight: '800',
  },
  kotak: color => ({
    width: 12,
    height: 12,
    backgroundColor: color,
  }),
  labelTopKota: {
    fontSize: 17,
    textAlign: 'center',

    fontWeight: 'bold',
  },
  rounded: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 24,
    height: 24,
    paddingBottom: 1,
    backgroundColor: '#ddd',
    borderRadius: 32,

    borderColor: '#ddd',
    textAlign: 'center',
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
    paddingVertical: 10,
    paddingHorizontal: 10,
    backgroundColor: '#153606',
  },
  containerMenu: {
    paddingHorizontal: 15,
    paddingVertical: 15,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    backgroundColor: 'white',
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
    fontSize: 16,
    fontFamily: 'Poppins-medium',
    color: '#D0D0D0',
    textAlign: 'left',
  },
  namepasi: {
    marginRight: 5,
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
