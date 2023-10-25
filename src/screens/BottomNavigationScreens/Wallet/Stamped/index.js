import {StyleSheet, Text, Image, TextInput, View} from 'react-native';
import React, {Component} from 'react';
import component from '../../../../Assets';
import style from './style';
import WalletList from '../../../../components/WalletList';

const Stamped = () => {
  return (
    <View>
      <View style={style.mainView}>
        <TextInput
          placeholder="Search by coffee shop name"
          placeholderTextColor={'#8F8666'}
          style={style.inputText1}></TextInput>
        <Image style={style.simage} source={component.search} />
        <WalletList />
      </View>
    </View>
  );
};

export default Stamped;

const styles = StyleSheet.create({});
