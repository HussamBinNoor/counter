import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import component from '../../../Assets';
import Button from '../../../components/Button';
import SocialIcons from '../../../components/SocialIcons';
import Textfield from '../../../components/Textfield';
import style from './style';

const Signup1 = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const [value, setvalue] = useState('');
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const SignIn = () => {
    navigation.navigate('Login2');
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValid = emailRegex.test(email);
    setIsValidEmail(isValid);
  };

  const handleEmailChange = newEmail => {
    setEmail(newEmail);
    validateEmail();
  };

  const pressHandler = () => {
    if (isValidEmail) {
      navigation.navigate('Referal');
    } else {
      console.log('Invalid email');
    }
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'android' ? 'padding' : 'height'}>
      <View style={style.secview}>
        <Image style={style.board1img} source={component.sign1img} />
        <Image
          style={[style.darklogo, {top: inset.top + 30}]}
          source={component.darklogo}
        />
        <View style={style.mainview}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <Text style={style.text}>Sign Up</Text>
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <SocialIcons source={component.googleImg} padd={8} boardw={2} />
              <SocialIcons source={component.twitImg} />
              <SocialIcons source={component.fbImg} />
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 10}}>
              <View style={style.line} />
              <Text style={style.ortext}>OR</Text>
              <View style={style.line} />
            </View>
            <Textfield
              placeholder="Email"
              value={email}
              onChangeText={handleEmailChange}
              keyboardType={'email-address'}
            />
            {!isValidEmail && (
              <Text style={style.errorText}>Invalid email format</Text>
            )}
            <Textfield
              placeholder="Password"
              secureIcon={true}
              secureText={true}
              value={pass}
              onChangeText={setPass}
            />
            <Textfield
              placeholder="Re-enter Password"
              secureIcon={true}
              secureText={true}
              value={value}
              onChangeText={setvalue}
            />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <Text style={style.termtext}>I agree with Terms of Use</Text>
              <Pressable
                onPress={() => setIsEnabled(!isEnabled)}
                style={[
                  style.togglemain,
                  {
                    backgroundColor: isEnabled
                      ? '#513003'
                      : 'rgba(218, 218, 218, 1)',
                    alignItems: isEnabled ? 'flex-end' : 'flex-start',
                  },
                ]}>
                <Pressable style={style.toggleinside}></Pressable>
              </Pressable>
            </View>
            <Button
              disabled={value === '' || pass === '' || email === ''}
              btnColor={'#513003'}
              title={'Sign Up'}
              textColor={'white'}
              buttonStyle={{marginTop: 20}}
              onPress={pressHandler}
            />
            <TouchableOpacity>
              <Text style={style.alreadytext} onPress={SignIn}>
                Already have an account?{' '}
                <Text
                  style={{
                    color: '#B18D5C',
                  }}>
                  Sign In
                </Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Signup1;
