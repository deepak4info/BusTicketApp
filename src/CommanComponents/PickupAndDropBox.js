import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PickupAndDropBox = ({rightImg}) => {
  return (
    <View style={{flex:1, backgroundColor:'white', marginTop:10,width:'100%'}}>
      
<View style={{flex:1, backgroundColor:'white',
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 5,
},
shadowOpacity: 0.34,
shadowRadius: 6.27,
elevation: 10,
}}>
<View style={{flex:1,width:'100%', backgroundColor:'white', justifyContent:'center', alignItems:'center', padding:10, flexDirection:'row'}}>

<View style={{flex:0.80, width:'80%', backgroundColor:'white',}} >
    <Text style={{fontSize:14, fontWeight:'700', color:'#000', lineHeight:20,}} >37 2nd Floor, Jaat Dharmshala,Ward no-14, Sirsa Road, Fatehabad, Haryana,12505</Text>
</View>

<View style={{flex:0.2, width:'20%', backgroundColor:'white', justifyContent:'flex-start', alignItems:'center'}}>
{rightImg == true ? <Image
   source={require('../Assets/Images/check.png')}
   style={{width:30, height:30}}
   />:
     <Image
    source={require('../Assets/Images/uncheck.png')}
    style={{width:30, height:30}}
    /> }

   
</View>

</View>

<View style={{flex:1, backgroundColor:'#fff', flexDirection:'row', justifyContent:'flex-start', alignItems:'center', marginVertical:20,}}>
<Image source={require('../Assets/Images/time.png')} 
style={{width:25, height:25, marginHorizontal:10,}}
/>
<Text style={{fontSize:14,color:'#000',fontWeight:'700', borderRightWidth:1,borderRightColor:'#000', paddingHorizontal:5,}}>Departure Time</Text>
<Text style={{fontSize:14, color:'#000', paddingLeft:5, fontWeight:'700'}}>08:45 PM</Text>
</View>
  
</View>



</View>
  )
}

export default PickupAndDropBox

const styles = StyleSheet.create({})