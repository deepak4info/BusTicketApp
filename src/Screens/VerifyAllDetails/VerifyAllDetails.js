import { StyleSheet, Text, View,ScrollView } from 'react-native'
import React from 'react'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'
import VerifyAllDetailsComp from '../../CommanComponents/VerifyAllDetails/VerifyAllDetailsComp'
VerifyAllDetailsComp




const VerifyAllDetails = () => {
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderComp
    rightIcon='openmenu'  
   />
         <ScrollView>
             <View style={{ flex: 0.1, width: '80%', alignItems: 'flex-start', justifyContent: 'center', marginLeft: '10%', marginVertical: 15, }}>
                 <Text style={{ fontSize: 24, color: '#120D26', fontWeight: '900', }}>Verify all details</Text>
             </View>
            <VerifyAllDetailsComp/>
             <View style={{marginTop:40,}}> 
             <BtnComp 
             btnNameComp='Continue To Payment'
             onPress={() => navigation.navigate('VerifyAllDetails')}
             />
             </View>
         </ScrollView>
 </View>
  )
}

export default VerifyAllDetails

const styles = StyleSheet.create({})