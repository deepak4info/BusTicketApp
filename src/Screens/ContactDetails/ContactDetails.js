import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'
import Contactdetails from '../../CommanComponents/ContactDetails/Contactdetails'
import { useNavigation } from '@react-navigation/native'

const ContactDetails = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderComp
    rightIcon='openmenu'  
   />
         <ScrollView>
             <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                 <Text style={{ fontSize: 24, color: '#120D26', fontWeight: '900', }}>Provide Contact details</Text>
             </View>
             <Contactdetails/>
             <View style={{marginTop:220,}}> 
             <BtnComp 
             btnNameComp='Confirm & Proceed'
             onPress={() => navigation.navigate('VerifyAllDetails')}
             />
             </View>
         </ScrollView>
 </View>
  )
}

export default ContactDetails

const styles = StyleSheet.create({})