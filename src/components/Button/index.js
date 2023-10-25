import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './style';

const Button = ({
  title,
  onPress,
  btnColor = '#51300399',
  textColor,
  textStyle = {},
  borderw,
  widt,
  borderc,
  buttonStyle = {},
  disabled,
}) => {
  return (
    <View>
      <TouchableOpacity
        disabled={disabled}
        style={[
          style.button,
          {
            backgroundColor: disabled ? '#51300399' : btnColor,
          },
          buttonStyle,
        ]}
        borderWidth={borderw}
        width={widt}
        onPress={onPress}
        bordercolor={borderc}>
        <Text style={[style.btntext, {color: textColor}, textStyle]}>
          {title}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;
