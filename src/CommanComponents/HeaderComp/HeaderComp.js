import { Image, StyleSheet, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'
import {  responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'


const HeaderComp = ({ rightIcon }) => {
  const navigation = useNavigation();
  return (
    <View style={styles.HeaderTop}>
      {(rightIcon == 'openmenu') ?
        <TouchableOpacity style={{ marginHorizontal: '6%' }}
          onPress={() => { navigation.navigate('OpenDrow') }}
          rightIcon='openmenu'
        >
          <Image
            source={require('../../Assets/Images/more.png')}
            style={styles.HeaderTopImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
        :
        <TouchableOpacity style={{ marginHorizontal: '6%' }}
          onPress={() => navigation.goBack()}
          rightIcon='goBack'
        >
          <Image
            source={require('../../Assets/Images/back.png')}
            style={styles.HeaderTopImage}
            resizeMode='contain'
          />
        </TouchableOpacity>
      }

      <TouchableOpacity
        onPress={() => { navigation.navigate('MyBooking') }}
      >
        <Image
          source={require('../../Assets/Images/Busbox.png')}
          style={{ width: responsiveWidth(35), height: '90%' }}
          resizeMode='contain'
        />
      </TouchableOpacity>
    </View>
  )
}

export default HeaderComp

const styles = StyleSheet.create({
  HeaderTop: {
    flexDirection: 'row', backgroundColor: '#fff', height: '10%', borderBottomWidth: responsiveWidth(5), borderBottomColor: '#e4dfdf',
    justifyContent: 'flex-start', alignItems: 'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 5,
    },
    shadowOpacity: 0.64,
    shadowRadius: 9.27,
    elevation: 40,
  },
  HeaderTopImage:
    { width: responsiveWidth(8), height: responsiveHeight(5), 
  }
})