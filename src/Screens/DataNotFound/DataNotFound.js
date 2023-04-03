import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'


const DataNotFound = () => {
    const navigation = useNavigation();
  return (
    <View style={{flex:1, backgroundColor:'white'}}>
    <HeaderComp
rightIcon='openmenu'  
/>

<View style={{flex:0.2,justifyContent:'center', alignItems:'center',}}> 
<Text style={{color:'#ad2f08',fontSize:30, fontWeight:'800',}}>Uhh, Oh..</Text>
</View>
<View style={{flex:0.54,justifyContent:'center', alignItems:'center',}}> 
<Image
source={require('../../Assets/Images/notfound.png')}
style={{width:270, height:290, resizeMode:'cover',}}
/>
</View>

<View style={{flex:0.15,justifyContent:'center', alignItems:'center',}}> 
<Text style={{color:'#ad2f08',fontSize:30, fontWeight:'800',}}>No Buses Found</Text>
</View>

<BtnComp 
         btnNameComp='Go Back'
         onPress={() => navigation.navigate('ContactDetails')}
         />
         
</View>
  )
}

export default DataNotFound

const styles = StyleSheet.create({})