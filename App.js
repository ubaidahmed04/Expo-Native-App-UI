import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './app/index';
import Login from './app/login';
import VerifyEmail from './app/login/verifyEmail';
import Verifyconfirm from './app/login/verifyconfirm';
import Profile from './app/login/profile';
import Gallery from './app/login/gallery';
import UploadProfile from './app/login/uploadProfile';
import LoginScreen from './app/login/loginScreen';
export default function App() {
  return (
    <View >

      <StatusBar style="auto" />
      {/* <HomeScreen/> */}
      {/* <Login/> */}
      {/* <VerifyEmail/> */}
      {/* <Verifyconfirm/> */}
      {/* <Profile /> */}
      {/* <Gallery/> */}
      {/* <UploadProfile/> */}
      <LoginScreen/>

    </View>
  );
}
