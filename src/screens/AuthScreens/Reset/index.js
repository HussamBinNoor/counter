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

const Reset = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [isEnabled, setIsEnabled] = useState(false);
  const [pass, setPass] = useState('');
  const [value, setvalue] = useState('');
  const [sended, setSended] = useState(false);

  const resetPass = () => {
    navigation.navigate('resetPassword');
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
            <Text style={style.text}>Reset Password</Text>
          </View>
        </View>
        <View style={style.mainview}>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            keyboardShouldPersistTaps="handled">
            {sended ? (
              <>
                <Text style={style.veriftext}>Verification Email</Text>
                <Text style={style.alreadytext}>
                  We have sent out verification link to your email to reset the
                  password
                </Text>
              </>
            ) : (
              <>
                <Text style={style.termtext}>Enter New Password</Text>

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
                  }}></View>
              </>
            )}
            <Button
              disabled={pass === '' || value === ''}
              btnColor={'#513003'}
              title={'Save'}
              textColor={'white'}
              buttonStyle={{marginTop: '70%'}}
              // onPress={''}
            />
          </ScrollView>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Reset;
