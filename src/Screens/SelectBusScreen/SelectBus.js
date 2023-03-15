import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BusesFound from '../../CommanComponents/BusesFound/BusesFound'

const SelectBus = () => {
  return (
    <View style={{flex:1,}}>
      <HeaderComp 
      rightIcon='openmenu'  
      />
      <BusesFound/>
    </View>
  )
}

export default SelectBus

const styles = StyleSheet.create({})