import React, {useState, useMemo, useEffect} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {Gap, Select, TextInput} from '../../atoms';

import {dataProvinsi, setTabindexinputkoresponden} from '../../../redux/action';
import {CBBaju, CBQA} from '../../index';
import {useSelector, useDispatch} from 'react-redux';
import FormProfilKoresponden from '../../atoms/FormProfilKoresponden';
import {CBAttributeLainnya} from '../CBAtrribute';
import {useForm} from '../../../utils';

// import {getFoodDataByTypes} from '../../../redux/action';

const Identitas = () => {
  const globalState = useSelector(state => state.dataProvinsiReducer);

  const dispatch = useDispatch();
  const [form, setForm] = useForm({
    nama_kota: '',
    kota: '',
    nama_kecamatan: '',
    kecamatan: '',
    nama_desa: '',
    desa: '',
  });
  useEffect(() => {
    dispatch(dataProvinsi());
    dispatch({
      type: 'RESET_PROVINSI',
    });
  }, []);

  const memoKota = useMemo(() => {
    return (
      <Select
        label="Kota"
        value={form.kota}
        onSelectChange={value => setForm('kota', value)}
        namaSelect="Pilih Kota"
        datax={globalState?.data_kota}
        koresponden
      />
    );
  }, [form.kota, globalState?.data_kota]);

  const memoKecamatan = useMemo(() => {
    return (
      <Select
        label="Kecamatan"
        value={form.kecamatan}
        datax={globalState?.data_kecamatan}
        namaSelect="Pilih Kecamatan"
        onSelectChange={value => setForm('kecamatan', value)}
        koresponden
      />
    );
  }, [form.kecamatan, globalState?.data_kecamatan]);

  const memoDesa = useMemo(() => {
    return (
      <Select
        label="Desa"
        value={form.desa}
        datax={globalState?.data_desa}
        onSelectChange={value => setForm('desa', value)}
        namaSelect="Pilih Desa"
        koresponden
      />
    );
  }, [form.desa, globalState?.data_desa]);
  return (
    <ScrollView>
      <View style={styles.tabViewContainer}>
        <View style={styles.tabView}>
          <FormProfilKoresponden />

          <Gap height={10} />
          {memoKota}
          <Gap height={20} />
          {memoKecamatan}
          <Gap height={20} />
          {memoDesa}
        </View>
      </View>
    </ScrollView>
  );
};

const QA = () => {
  return <CBQA />;
};
const Attribute = () => {
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Attribute yang diberikan :</Text>
        <CBBaju label="baju" />
        <CBBaju label="brosur" />
        <CBBaju label="spanduk" />
        <CBAttributeLainnya label="Lain-lain" />
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

const HomeTabSection = () => {
  const globalstate = useSelector(state => state);
  const dispatch = useDispatch();
  // const layout = useWindowDimensions();
  const globalStateTAB = useSelector(state => state);

  const [index, setIndex] = React.useState(
    globalStateTAB?.globalReducer?.tabIndexInputKoresponden,
  );

  console.log('setIndex', index);
  // index !== globalStateTAB?.globalReducer?.tabIndexInputKoresponden &&
  //   dispatch(setTabindexinputkoresponden(index));
  index != globalStateTAB?.globalReducer?.tabIndexInputKoresponden &&
    setIndex(globalStateTAB.globalReducer.tabIndexInputKoresponden);

  const [routes] = React.useState([
    {key: '1', title: 'Identitas '},
    {key: '2', title: 'Q&A'},
    {key: '3', title: 'Attribute'},
  ]);

  const renderScene = SceneMap({
    1: Identitas,
    2: QA,
    3: Attribute,
  });
  console.log('setIndex', renderScene);
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

export default HomeTabSection;

const styles = StyleSheet.create({
  tabViewContainer: {
    paddingHorizontal: 12,
    paddingVertical: 20,
  },
  tabView: {
    backgroundColor: 'white',
  },

  title: {
    color: 'black',
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    marginVertical: 14,
  },
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'column',
    padding: 16,
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    borderColor: '#020202',
  },
  labeldata: {
    margin: 8,
    color: 'black',
  },
});
