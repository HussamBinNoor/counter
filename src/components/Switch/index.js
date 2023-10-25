import React, {useState} from 'react';
import {View} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import style from './style';
const Eye = () => {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <View>
      <Feather
        onPress={() => {
          setvisible(!visible);
          setsee(!see);
        }}
        style={style.eyeBtn}
        size={20}
        name={'see' ? 'eye' : 'eye-off'}
        color="#8176e4"
      />
    </View>
  );
};

export default Eye;
