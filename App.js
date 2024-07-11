import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/index';
import Login from './app/login';
import VerifyEmail from './app/login/verifyEmail';
import Verifyconfirm from './app/login/verifyconfirm';
export default function App() {
  return (
    <View >

      <StatusBar style="auto" />
      <HomeScreen/>
      {/* <Login/> */}
      {/* <VerifyEmail/> */}
      {/* <Verifyconfirm/> */}

    </View>
  );
}
