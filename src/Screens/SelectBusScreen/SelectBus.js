import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BusesFound from '../../CommanComponents/BusesFound/BusesFound'


const SelectBus = () => {
  const navigation = useNavigation();

  return (
    <View style={{ flex: 1, }}>
      <HeaderComp
        rightIcon='openmenu'
      />
      <ScrollView>
      <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft:'10%', marginVertical:15,}}>
        <Text style={{ fontSize: 30, color: '#120D26', fontWeight: '900', }}>Buses Found</Text>
      </View>
      <BusesFound 
      onPress={() => navigation.navigate('SelectSeatScreen')}
      />
         <BusesFound 
      onPress={() => navigation.navigate('SelectSeatScreen')}
      />
         <BusesFound 
      onPress={() => navigation.navigate('SelectSeatScreen')}
      />
   
      </ScrollView>
    </View>
  )
}

export default SelectBus

const styles = StyleSheet.create({})