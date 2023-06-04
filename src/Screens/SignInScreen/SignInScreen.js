import { StyleSheet, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp';
import InputComp from '../../CommanComponents/InputBoxComp/InputComp';
import GoogleBox from '../../CommanComponents/GoogleBox/GoogleBox';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp';


const SignInScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, backgroundColor: '#fff' }}>
      <HeaderComp
        rightIcon='openmenu'
      />
      <KeyboardAwareScrollView>
        <InputComp
          textLabel='SignIn'
          FullName='Sign In'
          ConfirmPassword='SignIn'
          Forgot='Forgot Password ?'
        />

        <BtnComp
          btnNameComp='Sign In'
          onPress={() => navigation.navigate('SearchBusScreen')}
        />

        <GoogleBox
          Account='SignIn'
        />
      </KeyboardAwareScrollView>
    </View>
  )
}

export default SignInScreen

const styles = StyleSheet.create({})