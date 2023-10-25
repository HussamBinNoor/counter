import React, {useState} from 'react';
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import component from '../../../Assets';
import {setlogin} from '../../../Redux/action';
import Button from '../../../components/Button';
import SocialIcons from '../../../components/SocialIcons';
import Textfield from '../../../components/Textfield';
import style from './style';

const Login2 = ({navigation}) => {
  const dispatch = useDispatch();
  const signIn = () => {
    if (email && pass) {
      dispatch(setlogin());
      setEmail('');
      setPass('');
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  const inset = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const [pass, setPass] = useState('');
  const [email, setEmail] = useState('');
  const [isValidEmail, setIsValidEmail] = useState(true);
  const SignUp = () => {
    navigation.navigate('Signup1');
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

  const forgotpass = () => {
    if (isValidEmail) {
      navigation.navigate('ForgotPassword');
    } else {
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
            <Text style={style.text}>
              Welcome to GAWAPP{'\n'}
              <Text style={style.stext}>Create Account to continue</Text>
            </Text>
          </View>
        </View>
        <View style={style.mainview}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            <View style={{flexDirection: 'row', justifyContent: 'center'}}>
              <SocialIcons source={component.googleImg} padd={8} boardw={2} />
              <SocialIcons source={component.twitImg} />
              <SocialIcons source={component.fbImg} />
            </View>
            <View
              style={{flexDirection: 'row', alignItems: 'center', margin: 20}}>
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
            <TouchableOpacity onPress={forgotpass}>
              <Text style={style.termtext}>Forgot Password?</Text>
            </TouchableOpacity>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}></View>
            <Button
              disabled={email === '' || pass === ''}
              btnColor={'#513003'}
              title={'Sign In'}
              textColor={'white'}
              buttonStyle={{marginTop: '50%'}}
              onPress={signIn}
            />
            <TouchableOpacity onPress={SignUp}>
              <Text style={style.alreadytext}>
                Do not have an account yet?{' '}
                <Text
                  style={{
                    color: '#B18D5C',
                  }}>
                  Sign up
                </Text>
              </Text>
            </TouchableOpacity>
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login2;
