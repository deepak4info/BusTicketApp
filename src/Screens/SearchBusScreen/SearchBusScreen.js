import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import SearchCityComp from '../../CommanComponents/SearchCityComp/SearchCityComp'
import Calender from '../../CommanComponents/Calender/Calender'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'

const SearchBusScreen = () => {
  return (
    <View style={{flex:1,}}>
      <HeaderComp
       rightIcon='openmenu'  
      />
      <SearchCityComp/>
      <Calender/> 
      <BtnComp 
      btnNameComp='Search Buses'
      SearchBusScreen='SignUpScreen'
      />  
    </View>
  )
}

export default SearchBusScreen

const styles = StyleSheet.create({})