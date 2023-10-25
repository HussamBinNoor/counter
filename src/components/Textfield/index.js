import React, {useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './style';

const Textfield = ({
  placeholder,
  secureIcon = false,
  secureText,
  value,
  onChangeText,
}) => {
  const [Enabled, setEnabled] = useState('false');
  const [Visible, setVisible] = useState('false');
  return (
    <View>
      <TextInput
        secureTextEntry={Enabled ? secureText : !secureText}
        style={style.inputF}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor="grey"
      />
      {secureIcon && (
        <FontAwesome5
          onPress={() => setEnabled(!Enabled)}
          style={style.eyeBtn1}
          size={15}
          name={Enabled ? 'eye-slash' : 'eye'}
          color={Enabled ? 'grey' : 'green'}
        />
      )}
    </View>
  );
};

export default Textfield;

const styles = StyleSheet.create({});
