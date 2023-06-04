import { Image, StyleSheet, Text, View } from 'react-native'
import React,{useEffect} from 'react'
import { useNavigation } from '@react-navigation/native'

const Splash = () => {
    const navigation = useNavigation();

 useEffect(()=>{
    setTimeout(()=>{
        navigation.navigate('SignInScreen')
    },2000)
       
 },[]);  
  return (
    <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
      <Image source={require('../../Assets/Images/Splash.png')} 
      style={{width:'90%', height:'90%'}}
      resizeMode='contain'
      />
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({})