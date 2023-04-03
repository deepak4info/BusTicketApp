import { StyleSheet, Text, View, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import HeaderComp from '../../CommanComponents/HeaderComp/HeaderComp'
import BtnComp from '../../CommanComponents/BtnComponent/BtnComp'


const SomethineWentWorng = () => {
  const navigation = useNavigation();

  return (
      <View style={{flex:1, backgroundColor:'white'}}>
           <HeaderComp
       rightIcon='openmenu'  
      />

      <View style={{flex:0.2,justifyContent:'center', alignItems:'center',}}> 
      <Text style={{color:'#ad2f08',fontSize:30, fontWeight:'800',}}>Ooops..</Text>
      </View>
      <View style={{flex:0.54,justifyContent:'center', alignItems:'center',}}> 
      <Image
      source={require('../../Assets/Images/worng.png')}
      style={{width:270, height:270, resizeMode:'cover',}}
      />
      </View>

      <View style={{flex:0.15,justifyContent:'center', alignItems:'center',}}> 
      <Text style={{color:'#ad2f08',fontSize:30, fontWeight:'800',}}>Somethine Went Worng</Text>
      </View>
     
      <BtnComp 
                btnNameComp='Go Back'
                onPress={() => navigation.navigate('ContactDetails')}
                />
                
    </View>
  )
}

export default SomethineWentWorng

const styles = StyleSheet.create({})