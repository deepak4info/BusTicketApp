import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'
import AddNewPassenger from '../../CommanComponents/AddPassenger.js/AddNewPassenger'
import { useNavigation } from '@react-navigation/native'


const PassengerDetails = () => {
  const navigation = useNavigation();

  return (
    <View style={{flex:1, backgroundColor:'white'}}>
       <HeaderComp
       rightIcon='openmenu'  
      />
            <ScrollView>
                <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                    <Text style={{ fontSize: 24, color: '#120D26', fontWeight: '900', }}>Provide passenger details</Text>
                </View>
                <AddNewPassenger/>
                <View style={{flex:1, flexDirection:'row', alignItems:'flex-end',justifyContent:'flex-end'}}>
                  <Text style={{color:'#0031df', marginHorizontal:20, fontSize:12, marginVertical:20, fontWeight:'400'}}>+ Add new Passenger</Text>
                </View>
                <View style={{marginTop:100,}}> 
                <BtnComp 
                btnNameComp='Confirm & Proceed'
                onPress={() => navigation.navigate('ContactDetails')}
                />
                </View>
            </ScrollView>
    </View>
  )
}

export default PassengerDetails

const styles = StyleSheet.create({})