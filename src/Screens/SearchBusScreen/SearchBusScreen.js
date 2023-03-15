import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import SearchCityComp from '../../CommanComponents/SearchCityComp/SearchCityComp'
import Calender from '../../CommanComponents/Calender/Calender'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'

const SearchBusScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1,}}>
      <HeaderComp
       rightIcon='openmenu'  
      />
      <SearchCityComp/>
      <Calender/> 
      <BtnComp 
      btnNameComp='Search Buses'
      onPress={() => navigation.navigate('SelectBus')}
      />  
    </View>
  )
}

export default SearchBusScreen

const styles = StyleSheet.create({})