import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Calender = () => {
  return (
    <View style={{flex:0.35,marginTop:10,width:'84%', marginHorizontal:'7%',
    marginBottom:20,
    }}>
      <View style={{flexDirection:'row', borderWidth:1, borderColor:'#807A7A', backgroundColor:'#fff', borderRadius:10, alignItems:'center', marginTop:2}}>
        <Image source={require('../../Assets/Images/Calendar.png')}
        style={{width:30, height:30,marginHorizontal:10,}}
        /> 
      <TextInput
      placeholder='Chosse from calender'
      placeholderTextColor='#000'
      style={{fontSize:17, fontWeight:'600'}}
      />
           <Image source={require('../../Assets/Images/nextarrow.png')}
        style={{width:15, height:15,marginHorizontal:10, marginLeft:60,}}
        /> 
      </View>

      <View style={{flexDirection:'row',  justifyContent:'center',
alignItems:'center',
padding:'4%', flex:1, marginTop:10,}}>

      <TouchableOpacity style={{backgroundColor:'#fff', borderRadius:10, 
flex:1,justifyContent:'center',
alignItems:'center',
marginRight:15,
padding:15,
borderWidth:1, borderColor:'#000'
    }}>
          <Text style={{color:'#807A7A', fontSize:15, fontWeight:'700'}}>Today</Text>
        </TouchableOpacity>

        <TouchableOpacity style={{backgroundColor:'#5669FF', borderRadius:10, flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:15,
      }}>
          <Text style={{fontSize:15, fontWeight:'700', color:'#fff'}}>Tomorrow</Text>
        </TouchableOpacity>
      </View>

    </View>
  )
}

export default Calender

const styles = StyleSheet.create({})