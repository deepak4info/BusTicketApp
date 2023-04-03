import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const VerifyAllDetailsComp = () => {
  return (
    <View style={{flex:1, backgroundColor:'white', flexDirection:'column', marginHorizontal:'5%', width:'90%',alignItems:'center', justifyContent:'center',
    padding:'5%',
      borderRadius:16,
      shadowColor: "#000",
  shadowOffset: {
      width: 0,
      height: 7,
  },
  shadowOpacity: 0.41,
  shadowRadius: 9.11,
  elevation: 14,
      }}>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>source City</Text>
        <Text style={styles.textcolor}>Banglore</Text>
        </View>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>Destination City</Text>
        <Text style={styles.textcolor}>Chennai</Text>
        </View>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>source City</Text>
        <Text style={styles.textcolor}>source City</Text>
        </View>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>source City</Text>
        <Text style={styles.textcolor}>source City</Text>
        </View>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>source City</Text>
        <Text style={styles.textcolor}>source City</Text>
        </View>
        <View style={styles.viewStyle}> 
        <Text style={styles.textcolor}>source City</Text>
        <Text style={styles.textcolor}>source City</Text>
        </View>
      
    </View>
  )
}

export default VerifyAllDetailsComp

const styles = StyleSheet.create({
  viewStyle:{
    width:'100%',
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',
    marginVertical:25,
  },
  textcolor:{
    fontSize:12,
    fontWeight:'600',
    color:'#000',
  }
})