import React from 'react';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  SignIn,
  SplashScreen,
  SignUp,
  SignUpAddress,
  ValidasiSignUp,
  HomeData,
  Profile,
  DataKoresponden,
  FormKoresponden,
  DetailKoresponden,
  Setting,
  Keluar,
} from '../pages';
import {BottomNavigator} from '../components';
import {
  Attribut,
  IdentitasLain,
  TentangCaleg,
  TentangCalegKabupaten,
  TentangCalegPropinsi,
  TentangPKB,
} from '../pages/NewQuestion';
import IdentitasResponden from '../pages/NewQuestion/IdentitasResponden';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      <Tab.Screen
        name="Home"
        component={HomeData}
        options={{headerShown: false}}
      />

      <Tab.Screen
        name="Profil"
        component={Profile}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Responden"
        component={DataKoresponden}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />

      <Tab.Screen name="Keluar" component={Keluar} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator screenOptions={{animation: 'none'}}>
      <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignIn"
        component={SignIn}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUp"
        component={SignUp}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ValidasiSignUp"
        component={ValidasiSignUp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="DataKoresponden"
        component={DataKoresponden}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FormKoresponden"
        component={FormKoresponden}
        options={{headerShown: false}}
      />

      {/* Form Question */}
      <Stack.Screen
        name="IdentitasResponden"
        component={IdentitasResponden}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TentangCaleg"
        component={TentangCaleg}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TentangCalegPropinsi"
        component={TentangCalegPropinsi}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="TentangCalegKabupaten"
        component={TentangCalegKabupaten}
        options={{headerShown: false}}
      />

      <Stack.Screen
        name="TentangPKB"
        component={TentangPKB}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Attribute"
        component={Attribut}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="IdentitasLain"
        component={IdentitasLain}
        options={{headerShown: false}}
      />

      {/* Form Question */}
      <Stack.Screen
        name="DetailKoresponden"
        component={DetailKoresponden}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Setting"
        component={Setting}
        options={{headerShown: false}}
      />
      {/* <Stack.Screen
        name="SignUpAddress"
        component={SignUpAddress}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="SuccessSignUp"
        component={SuccessSignUp}
        options={{headerShown: false}}
      /> */}
      {/* <Stack.Screen
        name="MainApp"
        component={MainApp}
        options={{headerShown: false}}
      /> */}

      {/* <Stack.Screen
        name="EditProfile"
        component={EditProfile}
        options={{headerShown: false}}
      /> */}
    </Stack.Navigator>
  );
};

export default Router;
