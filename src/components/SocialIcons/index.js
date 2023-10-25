import React from 'react';
import {Image, View} from 'react-native';
import {style} from './style';

const SocialIcons = ({source, padd, boardw}) => {
  return (
    <View style={style.links} padding={padd} borderWidth={boardw}>
      <Image style={style.img} source={source} />
    </View>
  );
};

export default SocialIcons;
