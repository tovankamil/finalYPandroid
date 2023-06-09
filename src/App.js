// eslint-disable-next-line prettier/prettier
/**
 * Sample React Native App
 // eslint-disable-next-line prettier/prettier
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import Router from '../src/router';
import {Provider, useSelector} from 'react-redux';
import store from './redux/store';
import FlashMessage from 'react-native-flash-message';
import {Loading} from './components';
import {LogBox} from 'react-native';
const App = () => {
  LogBox.ignoreAllLogs();
  const MainApp = () => {
    const {isLoading} = useSelector(state => state.globalReducer);
    return (
      <NavigationContainer>
        <Router />

        <FlashMessage position="top" />
        {/* {isLoading && <Loading />} */}
        {/* <SignUpAddress/> */}
        {/* <ValidasiSignUp/> */}
        <FlashMessage position="top" />
        {isLoading && <Loading />}
      </NavigationContainer>
    );
  };
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

// const App = () => {
//   return (
//     <NavigationContainer>
//       <Provider store ={store}>
//         <Router />
//         {/* <SignUpAddress/> */}
//         {/* <ValidasiSignUp/> */}
//       </Provider>
//     </NavigationContainer>
//   );
// };
export default App;
