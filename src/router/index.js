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
} from '../pages';
import {BottomNavigator} from '../components';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomNavigator {...props} />}>
      {/* <Tab.Screen name="HomeData" component={HomeData} /> */}
      <Tab.Screen name="Data" component={DataKoresponden} />
      <Tab.Screen name="Add" component={TambahKoresponden} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
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
        name="Home"
        component={HomeData}
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
      <Stack.Screen
        name="DetailKoresponden"
        component={DetailKoresponden}
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
