import { StyleSheet, Text, View, TouchableOpacity,Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const BtnComp = ({
  btnNameComp, 
  onPress = () => { }, 
}) => {
  const Navigation= useNavigation();

  return (
    <TouchableOpacity style={{ flex:0.1, flexDirection:'row', backgroundColor: '#5669FF', justifyContent: 'space-around', alignItems: 'center', width:'82%', height:60, borderRadius:10, marginTop:25,marginHorizontal:'9%' }}
    onPress={onPress}
    >
      <View style={{alignSelf:'center', marginLeft:90}}> 

      { (btnNameComp=='SignUp') ?
   
      <Text style={{fontSize:20, fontWeight:'700', color:'#fff',}}> Sign Up</Text>
       : 
       <Text style={{fontSize:20, fontWeight:'700', color:'#fff',}}>{btnNameComp}</Text>
       }
      
      </View>
      <View> 
      <Image source={require('../../Assets/Images/next.png')} style={{width:30, height:30, alignSelf:'center',}} />
      </View>
    </TouchableOpacity>
  )
}

export default BtnComp

const styles = StyleSheet.create({})