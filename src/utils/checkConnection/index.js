import {useNetInfo} from '@react-native-community/netinfo';
export const checkConnection = () => {
  console.log('state.isConnected', useNetInfo());
};
