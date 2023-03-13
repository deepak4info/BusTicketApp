import { StyleSheet, Text, View, TextInput,Image } from 'react-native'
import React from 'react' 

const SearchCityComp = () => {
  return (
    <View style={{flex:0.4,marginBottom:20,}}>
      <View style={{width:'90%', backgroundColor:'#fff', marginHorizontal:'5%', marginTop:10, flexDirection:'row',borderWidth:1, borderColor:'#e4dfdf',borderRadius:10, justifyContent:'flex-start', alignItems:'center', padding:1, marginBottom:4, }}> 
      <Image source={require('../../Assets/Images/skyline.png')}
      style={{width:30, height:30, marginLeft:10}}
      />
      <TextInput 
      placeholder='Source city'
      placeholderTextColor='#747688'
      style={{fontSize:20, fontWeight:'900', marginLeft:20, flex:1,}}
      />
      </View>
      <View style={{justifyContent:'center', alignItems:'center', marginVertical:10,}}>
        <Image source={require('../../Assets/Images/up.png')} 
      style={{width:90, height:90, }}
        />
      </View>
      <View style={{width:'90%', backgroundColor:'#fff', marginHorizontal:'5%', marginTop:5, flexDirection:'row',borderWidth:1, borderColor:'#e4dfdf',borderRadius:10, justifyContent:'flex-start', alignItems:'center', padding:4, }}> 
      <Image source={require('../../Assets/Images/skyline.png')}
      style={{width:30, height:30, marginLeft:10}}
      />
      <TextInput 
      placeholder='Destination city'
      placeholderTextColor='#747688'
      style={{fontSize:20, fontWeight:'900', marginLeft:20, flex:1,}}
      />
      </View>

    </View>
  )
} 

export default SearchCityComp

const styles = StyleSheet.create({})