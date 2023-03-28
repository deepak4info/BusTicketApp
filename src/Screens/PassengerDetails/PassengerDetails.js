import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'
import AddNewPassenger from '../../CommanComponents/AddPassenger.js/AddNewPassenger'


const PassengerDetails = () => {
  return (
    <View style={{flex:1, backgroundColor:'yellow'}}>
       <HeaderComp
       rightIcon='openmenu'  
      />
            <ScrollView>
                <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                    <Text style={{ fontSize: 24, color: '#120D26', fontWeight: '900', }}>Provide passenger details</Text>
                </View>
                <AddNewPassenger/>
                <BtnComp 
                btnNameComp='Confirm & Proceed'
                onPress={() => navigation.navigate('SelectPickUpandDropPoint')}
                />
            </ScrollView>
    </View>
  )
}

export default PassengerDetails

const styles = StyleSheet.create({})