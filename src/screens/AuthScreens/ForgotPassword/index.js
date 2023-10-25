import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import component from '../../../Assets';
import Button from '../../../components/Button';
import Textfield from '../../../components/Textfield';
import style from './style';

const ForgotPassword = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  const handleEmailChange = newEmail => {
    setEmail(newEmail);
    // Add your validation logic here
    validateEmail();
  };

  const resetPass = () => {
    // Additional logic when the submit button is pressed
    if (isValidEmail) {
      // Perform actions for a valid email
      navigation.navigate('Reset');
    } else {
      // Handle invalid email
      console.log('Invalid email');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={style.secview}>
        <Image style={style.board1img} source={component.sign2img} />
        <View style={{position: 'absolute', width: '100%'}}>
          <Image
            style={[style.darklogo, {top: inset.top + 30}]}
            source={component.whitelogo}
          />
          <View style={style.textV}>
            <Text style={style.text}>Forgot Password?</Text>
          </View>
        </View>

        <View style={style.mainview}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <Text style={style.termtext}>
              Enter your email to reset the password
            </Text>

            <Textfield
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType={'email-address'}
            />
            {!isValidEmail && (
              <Text style={style.errorText}>Invalid email format</Text>
            )}
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}></View>
            <Button
              disabled={email === ''}
              btnColor={'#513003'}
              title={'Send'}
              textColor={'white'}
              buttonStyle={{marginTop: '90%'}}
              onPress={resetPass}
            />
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default ForgotPassword;
