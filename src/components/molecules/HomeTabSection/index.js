import React, {useEffect, useMemo} from 'react';
import {Dimensions, ScrollView, StyleSheet, Text, View} from 'react-native';
import {SceneMap, TabBar, TabView} from 'react-native-tab-view';

import {Gap, Select} from '../../atoms';

import {useDispatch, useSelector} from 'react-redux';
import {dataProvinsi} from '../../../redux/action';
import {useForm} from '../../../utils';
import FormProfilKoresponden from '../../atoms/FormProfilKoresponden';
import {CBBaju, CBQA, CBQANEW} from '../../index';
import {CBAttributeLainnya} from '../CBAtrribute';

const Identitas = () => {
  const globalState = useSelector(state => state?.dataProvinsiReducer);

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
  // return <CBQA />;
  return <CBQANEW />;
};

const Attribute = () => {
  const dispatch = useDispatch();
  const dataAttribute = [
    {id: 1, txt: 'Kaos', isChecked: false},
    {id: 2, txt: 'Stiker', isChecked: false},
    {id: 3, txt: 'Brosur', isChecked: false},
    {id: 4, txt: 'Banner', isChecked: false},
    {id: 5, txt: 'Spanduk', isChecked: false},
    {id: 6, txt: 'Kalender', isChecked: false},
    {id: 7, txt: 'Baliho', isChecked: false},
    {id: 8, txt: 'Bendera', isChecked: false},
    {id: 9, txt: 'Kerudung', isChecked: false},
  ];
  const SET_ALL_ATTRIBUTE = useSelector(state => state.formKorespondenReducer);

  useEffect(() => {
    dispatch({type: 'SET_ALL_ATTRIBUTE', value: dataAttribute});
  }, []);
  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.title}>Attribute yang diberikan :</Text>

        {Object.keys(SET_ALL_ATTRIBUTE.attribute).length > 0 &&
          SET_ALL_ATTRIBUTE?.attribute?.map((d, i) => {
            return (
              <CBBaju
                no={d.id}
                label={d.txt}
                isChecked={d.isChecked}
                data={SET_ALL_ATTRIBUTE?.attribute}
              />
            );
          })}
        <CBAttributeLainnya
          label="Lain-lain"
          data={SET_ALL_ATTRIBUTE?.attribute}
        />
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
  const dispatch = useDispatch();
  const globalState = useSelector(state => state.globalReducer);

  // const layout = useWindowDimensions();
  const globalStateTAB = useSelector(state => state);
  const [index, setIndex] = React.useState(0);

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

  return (
    <>
      {(globalState.usia != '' ||
        globalState.nikError != '' ||
        globalState.qaerror != '' ||
        globalState.atrerror != '') && (
        <View style={{paddingLeft: 15, marginVertical: 15}}>
          {globalState.identitasError != '' && (
            <Text style={styles.labelError}>{globalState?.identitasError}</Text>
          )}
          {globalState.nikError != '' && (
            <Text style={styles.labelError}>{globalState?.nikError}</Text>
          )}
          {globalState.usia != '' && (
            <Text style={styles.labelError}>{globalState?.usia}</Text>
          )}
          {globalState.qaerror != '' && (
            <Text style={styles.labelError}>{globalState?.qaerror}</Text>
          )}
          {globalState.atrerror != '' && (
            <Text style={styles.labelError}>{globalState?.atrerror}</Text>
          )}
        </View>
      )}

      <TabView
        renderTabBar={renderTabBar}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={initialLayout}
        style={styles.tabView}
      />
    </>
  );
};

export default HomeTabSection;

const styles = StyleSheet.create({
  labelError: {
    fontSize: 12,
    color: 'red',
  },
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
