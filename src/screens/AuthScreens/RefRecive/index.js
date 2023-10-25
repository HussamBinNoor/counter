import React, {useState} from 'react';
import {Image, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import component from '../../../Assets';
import Button from '../../../components/Button';
import style from './style';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';

const RefRecive = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [Referal, setReferal] = useState('');
  const goLogin = () => {
    navigation.navigate('Login2');
  };

  return (
    <View style={style.secview}>
      <Image style={style.board1img} source={component.share} />

      <Image
        style={[style.darklogo, {top: inset.top + 30}]}
        source={component.darklogo}
      />
      <Text style={style.text}>Thanks for submitting. </Text>
      <Text style={style.alreadytext}>
        Your friend will get a free stamp. Do not hesitate to share with your
        friends and get your free stamps
      </Text>

      <View style={style.mainview}>
        <Button
          btnColor={'#513003'}
          title={'Share'}
          textColor={'white'}
          buttonStyle={{
            marginTop: '20%',
            width: '40%',
          }}
          textStyle={{
            marginLeft: '27%',
            fontSize: 20,
          }}
        />
        <Image
          style={{
            position: 'absolute',
            height: 26,
            width: 25,
            marginLeft: 127,
            marginTop: 85,
          }}
          source={component.shareicon}
        />
        <Button
          btnColor={'white'}
          title={'Okay'}
          textColor={'black'}
          buttonStyle={{
            marginTop: '20%',
            borderColor: '#513003',
            height: 60,
            borderWidth: 2,
          }}
          onPress={goLogin}
        />
      </View>
    </View>
  );
};

export default RefRecive;
