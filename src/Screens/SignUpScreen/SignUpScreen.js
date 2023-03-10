import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import InputComp from '../../CommanComponents/InputBoxComp/InputComp'
import GoogleBox from '../../CommanComponents/GoogleBox/GoogleBox'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'


const SignUpScreen = () => {
  return (
    <View style={{flex:1,}}>
     <HeaderComp
    rightIcon='goBack'  
    />
    <KeyboardAwareScrollView>
      <InputComp 
      textLabel='SignUp' 
      FullName='SignUp'
      ConfirmPassword='SignUp'
      Forgot='SignUp'
      />
      <BtnComp
      btnNameComp='SignUp'
      />
      <GoogleBox
      Account='SignUp'
      />
    </KeyboardAwareScrollView>

    </View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({})