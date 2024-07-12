import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screen/HomeScreen';
import StartedScreen from './screen/StartedScreen';
import VerifyScreen from './screen/VerifyScreen';
import CreateProfile from './screen/CreateProfile';
import Gallery from './screen/Gallery';
import ConfirmScreen from './screen/ConfirmScreen';
import UploadProfile from './screen/UploadProfile';
import LoginScreen from './screen/LoginScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="HomeScreen">
        <Stack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Started"
          component={StartedScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Verify"
          component={VerifyScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Confirmation"
          component={ConfirmScreen}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="Profile Create"
          component={CreateProfile}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="gallery"
          component={Gallery}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="upload"
          component={UploadProfile}
          options={{ headerShown: false }} 
        />
        <Stack.Screen
          name="login"
          component={LoginScreen}
          options={{ headerShown: false }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
