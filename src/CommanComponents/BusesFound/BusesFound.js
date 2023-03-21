import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const BusesFound = ({
  onPress = () => { }, 
}) => {
  const Navigation= useNavigation();

  return (
    <TouchableOpacity
  onPress={onPress}  
    > 
    <View style={{
      flex: 0.3, backgroundColor: 'white', width: '80%', marginHorizontal: '10%', shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,
      elevation: 7,
      borderBottomLeftRadius: 10,
      borderBottomRightRadius: 10,
      marginVertical: 10,
    }}>

      <View style={{
        flex: 1, flexDirection: 'row', backgroundColor: 'white',

      }}>
        <View style={{ flex: 0.7, flexDirection: 'column', backgroundColor: 'white', width: '100%', }}>
          <Text style={{ color: '#000', fontSize: 17, fontWeight: '400', marginLeft: 20, marginTop: 10 }}>A/C Sleeper (2+1)</Text>

          <View style={{
            flexDirection: 'row', backgroundColor: 'white', marginTop: 20, justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 1,
            marginLeft: 10,
          }}>

            <Image
              source={require('../../Assets/Images/time.png')}
              style={{ width: 20, height: 20, marginHorizontal: 8 }}
            />
            <Text style={{ fontSize: 10, color: '#000', fontWeight: '600' }}>
              Departure Time
            </Text>
            <Text style={{ fontWeight: '800', fontSize: 10, color: '#000', marginLeft: 50, }}>
              08:30 PM
            </Text>

          </View>

          <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: 10, justifyContent: 'flex-start', alignItems: 'center', paddingVertical: 5, marginLeft: 10 }}>

            <Image
              source={require('../../Assets/Images/time.png')}
              style={{ width: 20, height: 20, marginHorizontal: 8 }}
            />
            <Text style={{ fontSize: 10, color: '#000', fontWeight: '600' }}>
              Journey Time
            </Text>
            <Text style={{ fontWeight: '800', fontSize: 10, color: '#000', marginLeft: 50, }}>
              07:45 Hrs
            </Text>

          </View>

        </View>
        <View style={{ flex: 0.3, backgroundColor: 'white', width: '40%', justifyContent: 'flex-start', alignItems: 'center' }}>

          <View style={{ backgroundColor: '#59DA44', paddingHorizontal: 20, paddingVertical: 8, marginTop: 5 }}>
            <Text style={{ color: '#fff', fontSize: 10, fontWeight: '600' }}>4.8</Text>
          </View>

          <View style={{ backgroundColor: '#C4C4C4', paddingHorizontal: 20, paddingVertical: 8, marginTop: 0, }}>
            <Text style={{ color: '#fff', fontSize: 10, fontWeight: '600' }}>1.5</Text>
          </View>

          <Text style={{ fontSize: 15, fontWeight: '800', color: '#000', marginTop: 20, }}>
            Rs.654.00
          </Text>

        </View>



      </View>


      <View style={{ backgroundColor: 'white', flexDirection: 'row', width: '100%', marginHorizontal: '0%', justifyContent: 'center', alignItems: 'center', paddingVertical: 10, }}>

        <View style={{ flex: 1, flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../Assets/Images/ac.png')}
            style={{ width: 17, height: 17, marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 9, fontWeight: '800', color: '#000' }}>A/C</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../Assets/Images/ac.png')}
            style={{ width: 20, height: 20, marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 10, fontWeight: '800', color: '#000' }}>WIFI</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', borderRightWidth: 1, borderRightColor: '#000', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../Assets/Images/ac.png')}
            style={{ width: 20, height: 20, marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 10, fontWeight: '800', color: '#000' }}>Charging</Text>
        </View>

        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
          <Image source={require('../../Assets/Images/ac.png')}
            style={{ width: 20, height: 20, marginHorizontal: 5 }}
          />
          <Text style={{ fontSize: 10, fontWeight: '800', color: '#000' }}>Rest</Text>
        </View>

      </View>
    </View>
    </TouchableOpacity>
  )
}

export default BusesFound

const styles = StyleSheet.create({})