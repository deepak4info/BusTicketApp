import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'


const HeaderComp = ({rightIcon}) => {
  const navigation = useNavigation();
  return (
    <View style={{flexDirection:'row', backgroundColor:'white', height:60,borderBottomWidth:5,borderBottomColor:'#e4dfdf',
    justifyContent:'flex-start',alignItems:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.64,
    shadowRadius: 9.27,
    elevation: 40,
    }}>
      { (rightIcon == 'openmenu') ? 
      <TouchableOpacity style={{marginHorizontal:30}}
        onPress={()=>{navigation.navigate('OpenDrow')}}
        rightIcon='openmenu'
      > 
        <Image 
        source={require('../../Assets/Images/more.png')}
        style={{width:25, height:25, }}        
        /> 
      </TouchableOpacity>
      : 
      <TouchableOpacity style={{marginHorizontal:30}}
      onPress={()=> navigation.goBack()}
      rightIcon='goBack'
    > 
      <Image 
      source={require('../../Assets/Images/back.png')}
      style={{width:25, height:25, }}        
      /> 
    </TouchableOpacity>
      
      }
 

      <TouchableOpacity 
      onPress={()=>{navigation.navigate('MyBooking') }}
      > 
        <Image 
        source={require('../../Assets/Images/Busbox.png')}
        style={{width:188, height:54, }}        
        /> 
      </TouchableOpacity>
      </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({})