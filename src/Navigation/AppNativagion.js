import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Screens/SplashScreen/Splash';
import SignInScreen from '../Screens/SignInScreen/SignInScreen';
import OpenDrow from './OpenDrow';
import MyBooking from '../Screens/MyBookings/MyBooking';
import SignUpScreen from '../Screens/SignUpScreen/SignUpScreen';
import LoginWithGoogle from '../Screens/LoginWithGoogle/LoginWithGoogle';
import GuestUser from '../Screens/GuestUser/GuestUser';
import SearchBusScreen from '../Screens/SearchBusScreen/SearchBusScreen';
import ForgetPassword from '../Screens/SignUpScreen/ForgetPassword';
import SelectBus from '../Screens/SelectBusScreen/SelectBus';
import SelectSeatScreen from '../Screens/SelectSeat/SelectSeatScreen';
import SelectPickUpandDropPoint from '../Screens/SelectPickupandDropPoint/SelectPickUpandDropPoint';
import PassengerDetails from '../Screens/PassengerDetails/PassengerDetails';
import ContactDetails from '../Screens/ContactDetails/ContactDetails';
import VerifyAllDetails from '../Screens/VerifyAllDetails/VerifyAllDetails';
import DataNotFound from '../Screens/DataNotFound/DataNotFound';
import SomethineWentWorng from '../Screens/DataNotFound/SomethineWentWorng';


const Stack = createNativeStackNavigator();

const AppNativagion = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Splash'
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignUpScreen'
          component={SignUpScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SignInScreen'
          component={SignInScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='LoginWithGoogle'
          component={LoginWithGoogle}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='GuestUser'
          component={GuestUser}
          options={{ headerShown: false }}
        />

        <Stack.Screen
          name='OpenDrow'
          component={OpenDrow}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='MyBooking'
          component={MyBooking}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SearchBusScreen'
          component={SearchBusScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ForgetPassword'
          component={ForgetPassword}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SelectBus'
          component={SelectBus}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SelectSeatScreen'
          component={SelectSeatScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SelectPickUpandDropPoint'
          component={SelectPickUpandDropPoint}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='PassengerDetails'
          component={PassengerDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='ContactDetails'
          component={ContactDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='VerifyAllDetails'
          component={VerifyAllDetails}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='DataNotFound'
          component={DataNotFound}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='SomethineWentWorng'
          component={SomethineWentWorng}
          options={{ headerShown: false }}
        />


      </Stack.Navigator>



    </NavigationContainer>
  )
}

export default AppNativagion

const styles = StyleSheet.create({})