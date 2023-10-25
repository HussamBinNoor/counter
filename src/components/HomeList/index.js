import React, {useState} from 'react';
import {
  FlatList,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
  View,
  TextInput,
  Animated,
} from 'react-native';
import Swiper from 'react-native-swiper';
import component from '../../Assets';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import style from './style';
const commentsdata = [
  {
    dp: component.shun,
    name: 'Mahi Ahmed',
    time: '10 Mins Ago',
    comment:
      'Thank you for your fantastic feedback about our coffee shop! Were thrilled that you found our coffee to be flavorful and our pastries to be delicious',
  },
  {
    dp: component.mahi,
    name: 'Mahi Ahmed',
    time: '10 Mins Ago',
    comment:
      'Thank you for your fantastic feedback about our coffee shop! Were thrilled that you found our coffee to be flavorful and our pastries to be delicious',
  },
  {
    dp: component.tani,
    name: 'Mahi Ahmed',
    time: '10 Mins Ago',
    comment:
      'Thank you for your fantastic feedback about our coffee shop! Were thrilled that you found our coffee to be flavorful and our pastries to be delicious',
  },
];
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
const HomeList = () => {
  return (
    <View style={{marginBottom: 120}}>
      {/* <Button title={'Logout'} textColor={'#fff'} onPress={signOut} /> Logout Button */}
      <FlatList
        data={homeScroll}
        renderItem={({item}) => <Post item={item} />}
      />
    </View>
  );
};

export default HomeList;

const Post = ({item}) => {
  const [click, setClick] = useState(false);
  return (
    <View style={style.mainview}>
      <Image style={style.dpView} source={item.dp} />
      <Text style={style.nameView}>{item.name}</Text>
      <Text style={style.timeView}>{item.time}</Text>
      <Image style={style.heartView} source={component.heart} />
      <View style={style.swiperView}>
        <Swiper
          showsButtons
          loop={false}
          paginationStyle={{position: 'absolute', bottom: -20}}
          activeDotColor="black"
          prevButton={
            <Text style={{color: '#fff'}}>
              <FontAwesome5Icon size={15} name="arrow-left" />
            </Text>
          }
          nextButton={
            <Text style={{color: '#fff'}}>
              <FontAwesome5Icon size={15} name="arrow-right" />
            </Text>
          }>
          {item.image.map((image, index) => (
            <View key={index}>
              <Image source={image} style={style.swiperImg} />
            </View>
          ))}
        </Swiper>
      </View>
      <Text style={style.descView}>{item.desc}</Text>
      <View style={style.lineView} />
      <View style={style.iconsView}>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image style={style.likeImg} source={component.like} />
          <Text style={style.likeCount}>{item.likes}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setClick(prev => !prev)}
          style={{flexDirection: 'row'}}>
          <Image style={style.commentImg} source={component.comment} />
          <Text style={style.commentCount}>{item.comments}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{flexDirection: 'row'}}>
          <Image style={style.shareImg} source={component.postshare} />
          <Text style={style.shareCount}>{item.shares}</Text>
        </TouchableOpacity>
      </View>
      {click ? (
        <>
          <View style={style.commentboxView}>
            <Image style={style.dpactiveImg} source={item.dp} />
            <TextInput
              style={style.commentInput}
              placeholder="Write a comment"
              placeholderTextColor={'grey'}></TextInput>
          </View>
          <Text style={style.comment2ndCount}>10 Comment</Text>
          <View>
            <FlatList
              data={commentsdata}
              renderItem={({item}) => (
                <>
                  <View style={style.secLine} />
                  <View style={{marginLeft: 10}}>
                    <View style={{flexDirection: 'row'}}>
                      <Image style={style.commentDp} source={item.dp} />
                      <View style={style.commentInsideView}>
                        <Text style={style.commentName}>{item.name}</Text>
                        <Text style={style.commentTime}>{item.time}</Text>
                      </View>
                    </View>
                    <Text style={style.commentText}>{item.comment}</Text>
                  </View>
                </>
              )}
            />
          </View>
          <Text style={style.loadMore}>Load More !</Text>
        </>
      ) : null}
    </View>
  );
};
