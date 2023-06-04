import { StyleSheet, Text, View, TextInput, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveWidth, responsiveHeight } from 'react-native-responsive-dimensions'


import { useNavigation } from '@react-navigation/native'
const InputComp = ({
  textLabel,
  FullName,
  ConfirmPassword,
  Forgot,
}) => {
  const Navigation = useNavigation();
  return (
    <View style={styles.TopHeader}>
      {(textLabel == 'SignIn') ?
        <Text style={styles.TopHeaderText}> Sign In</Text>
        :
        <Text style={styles.TopHeaderText}> Sign Up</Text>
      }

      {(FullName == 'SignUp') ?
        <View>
          <View style={styles.InputBox}>
            <Image source={require('../../Assets/Images/user.png')} style={styles.InputBoxImageIconLetf} />
            <TextInput placeholder='Full Name' placeholderTextColor='#000'
              style={styles.InputBoxContainer}
            />
          </View>
          <View style={styles.InputBox}>
            <Image source={require('../../Assets/Images/envelope.png')} style={styles.InputBoxImageIconLetf} />
            <TextInput placeholder='E-mail' placeholderTextColor='#000'
              style={styles.InputBoxContainer}
            />
          </View>
        </View>
        :
        <View style={styles.InputBox}>
          <Image source={require('../../Assets/Images/envelope.png')} style={styles.InputBoxImg} />
          <TextInput placeholder='E-mail' placeholderTextColor='#000'
            style={styles.InputBoxContainer}
          />
        </View>

      }

      {(ConfirmPassword == 'SignUp') ?

        <View style={{ width: '96%' }}>
          <View style={styles.InputBox}>
            <Image source={require('../../Assets/Images/padlock.png')} style={styles.InputBoxImageIconLetf} />
            <TextInput placeholder='Password' placeholderTextColor='#000'
              style={styles.InputBoxContainer}
            />
            <Image source={require('../../Assets/Images/hidden.png')} style={styles.InputBoxImageIconLetf} />
          </View>
          <View style={styles.InputBox}>
            <Image source={require('../../Assets/Images/padlock.png')} style={styles.InputBoxImageIconLetf} />
            <TextInput placeholder='Confirm Password' placeholderTextColor='#000'
              style={styles.InputBoxContainer}
            />
            <Image source={require('../../Assets/Images/hidden.png')} style={styles.InputBoxImageIconLetf} />
          </View>
        </View>

        :
        <View style={styles.InputBox}>
          <Image source={require('../../Assets/Images/padlock.png')} style={styles.InputBoxImageIconLetf} />
          <TextInput placeholder='Password' placeholderTextColor='#000'
            style={styles.InputBoxContainer}
          />
          <Image source={require('../../Assets/Images/hidden.png')} style={styles.InputBoxImageIconLetf} />
        </View>

      }

      {(textLabel == 'SignIn') ?

        <View style={styles.Forgotbox}>
          <TouchableOpacity
            onPress={() => { Navigation.navigate('ForgetPassword') }}
          >
            <Text style={styles.ForgotboxText}>{Forgot}</Text>
          </TouchableOpacity>
        </View> : null}

    </View>
  )
}

export default InputComp

const styles = StyleSheet.create({
  TopHeader: {
    flex: 1, width: '88%', alignItems: 'flex-start', marginHorizontal: '6%',
  },
  TopHeaderText:
  {
    fontSize: responsiveFontSize(3), color: '#000', fontWeight: '800'
  },
  InputBox: {
    width: '96%', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', borderWidth: responsiveWidth(0.3), color: '#e8e8e8', borderRadius: 10, marginTop: responsiveHeight(2), marginLeft: '4%',
  },
  InputBoxImageIconLetf:
    { width: responsiveWidth(5), height: responsiveHeight(3) },
  InputBoxContainer: {
    width: '85%', paddingLeft: '2%',
  },
  InputBoxImg:
    { width: responsiveWidth(5), height: responsiveHeight(3) },
  Forgotbox: { flex: 0.2, flexDirection: 'column', justifyContent: 'center', alignItems: 'center', width: '100%', marginTop: responsiveHeight(3) },
  ForgotboxText: { fontSize: 18, fontWeight: '800', color: '#000' },

})