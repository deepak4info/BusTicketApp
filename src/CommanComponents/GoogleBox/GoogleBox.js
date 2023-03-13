import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const GoogleBox = ({Account}) => {
  const navigation = useNavigation();
  return (
    <View style={{flex:0.3, width:'100%', justifyContent:'center', alignItems:'center'}}>
      <Text style={{fontSize:22,color:'#9d9898', fontWeight:'900',marginTop:20}}>OR</Text>

      <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center', width:'100%',marginTop:20}}
      onPress={()=>{navigation.navigate('LoginWithGoogle')}}
     
      > 
        <Image source={require('../../Assets/Images/google.png')} style={{width:50, height:50}} />
        <Text  style={{fontSize:16, color:'#000', fontWeight:'500', marginLeft:20}}> Login With Google </Text>
      </TouchableOpacity>
      <TouchableOpacity style={{flex:1, flexDirection:'row', justifyContent:'center', alignItems:'center',  width:'100%', marginTop:30,}}
        onPress={()=>{navigation.navigate('GuestUser')}}
      
      > 
        <Image source={require('../../Assets/Images/user.png')} style={{width:50, height:50}} />
        <Text  style={{fontSize:16, color:'#000', fontWeight:'500', marginLeft:20}}> Guest User Login</Text>
      </TouchableOpacity>
{ (Account == 'SignIn') ? 
  <View style={{flexDirection:'row'}}> 
<Text style={{fontSize:16, color:'#000', fontWeight:'500', marginTop:30}}>Don't Have an account?</Text>
<TouchableOpacity onPress={()=>{
    navigation.navigate('SignUpScreen')
}}> 
<Text style={{fontSize:16, color:'#5669FF', fontWeight:'500', marginTop:30}}>Sign Up</Text>
</TouchableOpacity>
</View>
:
<View style={{flexDirection:'row'}}> 
<Text style={{fontSize:16, color:'#000', fontWeight:'500', marginTop:30}}>Already Have an account ?</Text>
<TouchableOpacity onPress={()=>{
    navigation.navigate('SignInScreen')
}}> 
<Text style={{fontSize:16, color:'#5669FF', fontWeight:'500', marginTop:30}}>Sign In</Text>
</TouchableOpacity>
</View>
}

    </View>
  )
}

export default GoogleBox

const styles = StyleSheet.create({})