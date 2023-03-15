import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const BusesFound = () => {
  return (
    <View style={{flex:1,marginVertical:20,}}>
      <Text style={{fontSize:24, color:'#120D26', fontWeight:'500',  marginHorizontal:35,}}>Buses Found</Text>
      <View style={{flex:1,backgroundColor:'green', }}>
      <View style={{flexDirection:'row', height:30, backgroundColor:'red', }}> 
      <Text>A/C Sleeper(2+1)</Text>
      <Text>4.8</Text>
      </View>

      </View>
      
    </View>
  )
}

export default BusesFound

const styles = StyleSheet.create({})