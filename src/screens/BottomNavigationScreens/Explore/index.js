import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
// import {useDispatch} from 'react-redux';
// import {setlogout} from '../../Redux/action'; Logout Call
import Swiper from 'react-native-swiper';
import component from '../../../Assets';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import HomeList from '../../../components/HomeList';

const Home = () => {
  // const dispatch = useDispatch();
  // const signOut = () => {
  //   dispatch(setlogout());
  // };
  const homeScroll = [
    {
      dp: component.mahi,
      name: 'Mahi Ahmed',
      image: [
        component.image1,
        component.image2,
        component.image3,
        component.image4,
      ],
      time: '10 Mins Ago',
      desc: 'I really like the atmosphere, good coffee, and nice interior. This is a good place to study or chill with friends. The drinks and foods were all tasty and worthwhile. ',
      likes: '34',
      comments: '10',
      shares: '0',
    },
    {
      dp: component.tani,
      name: 'tania’s teahouse',
      image: [
        component.taniimg,
        component.image2,
        component.image3,
        component.image4,
      ],
      time: '28 mins Ago',
      desc: 'spring has sprung which means that hot girl summer is fast approaching.⁠ ⁠Pick from our selection of 28 custom-blended and hand-picked teas and we will make it iced!',
      likes: '34',
      comments: '10',
      shares: '2',
    },
    {
      dp: component.shun,
      name: 'Shun Polok',
      image: [
        component.shunimg,
        component.image1,
        component.image3,
        component.image4,
      ],
      time: '28 mins Ago',
      desc: 'Exclusive Referral Coupon: 10mayespresso Show this post and get the offer!',
      likes: '34',
      comments: '10',
      shares: '0',
    },
    {
      dp: component.the,
      name: 'The Espresso Lab',
      image: [
        component.theimg,
        component.image1,
        component.image3,
        component.image4,
      ],
      time: '28 mins Ago',
      desc: 'spring has sprung which means that hot girl summer is fast approaching.⁠ ⁠Pick from our selection of 28 custom-blended and hand-picked teas and we will make it iced!',
      likes: '34',
      comments: '10',
      shares: '0',
    },
  ];
  return (
    <View style={{flex: 1}}>
      <View style={{height: 60, width: '100%', backgroundColor: '#513003'}}>
        <Image style={{height: 70, width: 70}} source={component.headweb} />
        <Image
          style={{
            height: 21,
            width: 20,
            marginTop: 20,
            marginLeft: 15,
            position: 'absolute',
          }}
          source={component.shareicon}
        />
        <Image
          style={{
            height: 21,
            width: 100,
            marginTop: 20,
            alignSelf: 'center',
            position: 'absolute',
          }}
          source={component.headlogo}
        />
      </View>
      <HomeList />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
