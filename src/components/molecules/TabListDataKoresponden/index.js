import {useNavigation} from '@react-navigation/native';
import React, {useCallback} from 'react';
import {
  Dimensions,
  RefreshControl,
  ScrollView,
  StyleSheet,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';
import {useDispatch, useSelector} from 'react-redux';

import {ButtonPrimary} from '../..';
import {getDataKoresponden, setLogout} from '../../../redux/action';
import {getData} from '../../../utils';
import {Gap} from '../../atoms';
import ListDataKoresponden from '../ListDataKoresponden';
import ListDataSqlLite from '../ListDataSqlLite';

const DataTerinput = () => {
  const globalState = useSelector(state => state);
  const navigation = useNavigation();

  const dispatch = useDispatch();
  const [refreshing, setRefreshing] = React.useState(false);
  globalState.globalReducer.isLogout && dispatch(setLogout(false));
  globalState.globalReducer.isLogout &&
    navigation.reset({index: 0, routes: [{name: 'SignIn'}]});

  const refreshdata = useCallback(() => {
    setRefreshing(true);
    getData('token')
      .then(data => {
        dispatch(getDataKoresponden(data));
      })
      .catch(err => console.log('data', err));
    setTimeout(() => {
      setRefreshing(false);
    }, 1);
  }, []);
  return (
    <>
      {/* <View style={styles.boxButton}>
        <ButtonPrimary
          bg="#0EA137"
          color="white"
          textData="Tambah responden"
          onPress={() => navigation.navigate('FormKoresponden')}
          _
        /> */}
      <View style={styles.boxButton}>
        <ButtonPrimary
          bg="#0EA137"
          color="white"
          textData="Tambah responden"
          onPress={() => navigation.navigate('IdentitasResponden')}
          _
        />
      </View>
      <ScrollView
        refreshControl={
          <RefreshControl onRefresh={refreshdata} refreshing={refreshing} />
        }
      >
        <View style={styles.tabViewContainer}>
          <View style={styles.tabView}>
            <ListDataKoresponden />
            <Gap height={14} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const DataTerpending = () => {
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <ListDataSqlLite />
          <Gap height={14} />
        </View>
      </View>
    </ScrollView>
  );
};

const renderTabBar = props => (
  <TabBar
    {...props}
    indicatorStyle={{backgroundColor: 'green'}}
    style={{backgroundColor: 'white'}}
    labelStyle={{fontSize: 12, color: 'black', fontWeight: 'bold'}}
    tabStyle={{width: 'auto'}}
  />
);

const initialLayout = {width: Dimensions.get('window').width};

const TabListDataKoresponden = () => {
  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: '1', title: 'Data Terinput '},
    {key: '2', title: 'Data Terpending'},
  ]);

  const renderScene = SceneMap({
    1: DataTerinput,
    2: DataTerpending,
  });

  return (
    <TabView
      renderTabBar={renderTabBar}
      navigationState={{index, routes}}
      renderScene={renderScene}
      onIndexChange={setIndex}
      initialLayout={initialLayout}
      style={styles.tabView}
    />
  );
};

export default TabListDataKoresponden;

const styles = StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 0,
  },
  tabView: {
    backgroundColor: 'white',
  },
  boxButton: {
    marginVertical: 12,
    paddingHorizontal: 14,
    paddingVertical: 14,
  },
});
