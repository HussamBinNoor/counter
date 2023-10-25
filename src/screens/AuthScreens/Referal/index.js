import React, {useState} from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import component from '../../../Assets';
import Button from '../../../components/Button';
import Textfield from '../../../components/Textfield';
import style from './style';

const Referal = ({navigation}) => {
  const inset = useSafeAreaInsets();
  const [Referal, setReferal] = useState('');
  const pressHandler = () => {
    navigation.navigate('RefRecive');
  };
  return (
    <View style={style.secview}>
      <Image style={style.board1img} source={component.referal} />
      <Image
        style={[style.darklogo, {top: inset.top + 30}]}
        source={component.darklogo}
      />
      <Text style={style.text}>Enter your friend referral code</Text>

      <View style={style.mainview}>
        <Textfield
          placeholder="Enter a referral code"
          value={Referal}
          onChangeText={setReferal}
        />
        <Button
          disabled={Referal === ''}
          btnColor={'#513003'}
          title={'Submit'}
          textColor={'white'}
          buttonStyle={{marginTop: '40%'}}
          onPress={pressHandler}
        />
        <TouchableOpacity>
          <Text style={style.alreadytext}>I don’t have one. Skip!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Referal;
