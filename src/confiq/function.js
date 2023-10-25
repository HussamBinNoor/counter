import {LayoutAnimation} from 'react-native';

export const LayoutAnimate = (time = 500) => {
  LayoutAnimation.configureNext({
    duration: time,
    create: {
      type: LayoutAnimation.Types.easeInEaseOut,
      property: LayoutAnimation.Properties.opacity,
    },
    update: {type: LayoutAnimation.Types.easeInEaseOut},
  });
};
