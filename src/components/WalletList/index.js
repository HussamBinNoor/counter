import React, {useState} from 'react';
import {FlatList, Image, ScrollView, Text, View} from 'react-native';
import component from '../../Assets';
import style from './style';
const cardData = [
  {
    dp: component.sen,
    name: 'Tania’s teahouse',
    color: '#CDE0D5',
    address: 'Dubai hills estate',
    distance: '23',
    stamps: '5',
    heart: component.blackheart,
  },
  {
    dp: component.tan,
    name: 'Alchemy',
    color: '#fff',
    address: 'Al Wasl Road, Jumeirah',
    distance: '23',
    stamps: '9',
    heart: component.heart,
  },

  {
    dp: component.mo,
    name: 'Mokha 1450',
    color: '#B18D5B',
    address: '15A Street, Sheikh Zayed Rd',
    distance: '13',
    stamps: '6',
    heart: component.heart,
  },

  {
    dp: component.ma,
    name: 'The espresso lab',
    color: '#DBDBDB',
    distance: '23',
    address: 'Al Badaa, Al Wasl Road',
    stamps: '8',
    heart: component.blackheart,
  },
  {
    dp: component.mo,
    name: 'Tania’s teahouse',
    color: '#CDE0D5',
    address: 'Building 2, Sobha Hartland Greens 2',
    distance: '81',
    heart: component.heart,
    stamps: '2',
  },
  {
    dp: component.shun,
    name: 'Mahi Ahmed',
    color: '#FFDFB2',
    address: 'Warehouse S4, Al Quoz Logistics Park',
    stamps: '0',
    distance: '8',
    heart: component.heart,
  },
];
const WalletList = () => {
  return (
    <FlatList
      contentContainerStyle={{paddingBottom: 280, paddingTop: 40}}
      data={cardData}
      renderItem={({item}) => <Post item={item} />}
    />
  );
};

const Post = ({item}) => {
  const [click, setClick] = useState(false);

  return (
    <View style={[style.card1, {backgroundColor: item.color}]}>
      <Image style={style.titleDp} source={item.dp} />
      <View>
        <Image style={style.slogos} source={component.title} />
        <Text style={style.nameView}>{item.name}</Text>
      </View>
      <View>
        <Image style={style.slogos} source={component.address} />
        <Text style={style.timeView}>{item.address}</Text>
      </View>
      <Image style={style.heartView} source={item.heart} />
      <Image style={style.kmlogos1} source={component.stamp} />
      <Image style={style.kmlogos2} source={component.distance} />
      <View style={style.km}>
        <Text style={style.descView}>{item.distance}km</Text>
        <Text style={style.descView}>{item.stamps} stamps collected</Text>
      </View>
    </View>
  );
};

export default WalletList;
