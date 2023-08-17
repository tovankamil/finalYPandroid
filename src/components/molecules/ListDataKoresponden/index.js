import {useNavigation} from '@react-navigation/core';
import React, {useCallback, useEffect, useState} from 'react';
import {ActivityIndicator} from 'react-native';
import {Text, View, StyleSheet, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getDataKoresponden} from '../../../redux/action';
import {getData} from '../../../utils';
import {checkConnection} from '../../../utils/checkConnection';
import {AtomListDataKoresponden, Gap} from '../../atoms';

const ListDataKoresponden = () => {
  const globalState = useSelector(
    state => state.dataKorespondenReducer.data_koresponden,
  );

  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  useEffect(() => {
    dispatch({type: 'RESET_LIST_DATA_KORESPONDEN'});
    getData('token').then(data => {
      dispatch(getDataKoresponden(data));
    });
  }, []);
  const renderLoader = () => {
    <View style={styles.loaderStyle}>
      <ActivityIndicator size="large" color="aaa" />
    </View>;
  };
  const renderItem = useCallback(
    ({item, index}) => {
      return (
        <View key={index}>
          <View key={index}>
            <Gap height={12} />
            <AtomListDataKoresponden
              value={item}
              onPress={() => navigation.navigate('DetailKoresponden', item)}
            />
          </View>
        </View>
      );
    },
    [globalState],
  );

  const loadMoreItem = () => {};
  const keyextractor = useCallback(item => item._id);
  return (
    <View style={styles.container}>
      {/* <FlatList
        renderItem={renderItem}
        data={globalState.data}
        keyExtractor={item => item._id}
        ListFooterComponent={renderLoader}
        onEndReached={loadMoreItem}
      /> */}
    </View>
  );

  //   return (
  //   <View style={styles.container}>
  //     {globalState?.data?.length > 0 &&
  //       globalState.data.map((value, index) => {
  //         return (
  //           <View key={index}>
  //             <Gap height={12} />
  //             <AtomListDataKoresponden
  //               value={value}
  //               onPress={() => navigation.navigate('DetailKoresponden', value)}
  //             />
  //           </View>
  //         );
  //       })}
  //   </View>
  // );
};

export default React.memo(ListDataKoresponden);
const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 0,
  },
  loaderStyle: {
    marginVertical: 16,
    alignItems: 'center',
  },
});
