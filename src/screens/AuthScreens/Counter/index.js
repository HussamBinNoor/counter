import React, {useState} from 'react';
import {
  Alert,
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addPerson} from '../Redux/action';

const Screen = ({}) => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [phone, setPhone] = useState('');
  const {persons, counter} = useSelector(select => select.counter);
  const dispatch = useDispatch();

  const onPress = () => {
    if (name && password && phone) {
      const newPerson = {name, password, phone};
      dispatch(addPerson(newPerson));
      setName('');
      setPassword('');
      setPhone('');
    } else {
      Alert.alert('Please fill all fields');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View
        style={{
          marginHorizontal: 20,
          marginTop: 20,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontWeight: 'bold',
          }}>
          REDUX COUNTER
        </Text>
      </View>

      <Text
        style={{
          color: 'black',
          textAlign: 'center',
          marginTop: 30,
        }}>
        Counter: {counter}
      </Text>
      <View
        style={{
          color: 'black',
          marginTop: 20,
          marginHorizontal: 20,
        }}>
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 0.5,
            color: 'black',
            width: '100%',
            borderRadius: 50,
            marginTop: 20,
            paddingHorizontal: 25,
            alignItems: 'flex-end',
          }}
          placeholder="Enter your Name"
          placeholderTextColor="grey"
          value={name}
          onChangeText={text => setName(text)}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 0.5,
            color: 'black',
            width: '100%',
            borderRadius: 50,
            marginTop: 20,
            paddingHorizontal: 25,
            alignItems: 'flex-end',
          }}
          placeholder="Enter your Password"
          placeholderTextColor="grey"
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry={true}
        />
        <TextInput
          style={{
            borderColor: 'black',
            borderWidth: 0.5,
            color: 'black',
            width: '100%',
            borderRadius: 50,
            marginTop: 20,
            paddingHorizontal: 25,
            alignItems: 'flex-end',
          }}
          keyboardType="number-pad"
          placeholder="Enter your phone Number"
          placeholderTextColor="grey"
          value={phone}
          onChangeText={text => setPhone(text)}
        />
        <TouchableOpacity style={styles.confirmButton} onPress={onPress}>
          <Text style={styles.confirmButtonText}>Add</Text>
        </TouchableOpacity>
      </View>
      <Text>List of Persons:</Text>
      <FlatList
        data={persons}
        contentContainerStyle={{paddingBottom: 30}}
        renderItem={({item}) => (
          <View
            style={{
              backgroundColor: '#aae6bb',
              alignSelf: 'center',
              margin: 2,
              alignItems: 'center',
              padding: 20,
              width: '98%',
            }}>
            <Text style={{color: 'black'}}>Name:{item.name}</Text>
            <Text style={{color: 'black'}}>Password:{item.password}</Text>
            <Text style={{color: 'black'}}>Phone Number:{item.phone}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default Screen;

const styles = StyleSheet.create({
  confirmButton: {
    backgroundColor: 'green',
    width: '100%',
    height: 55,
    marginTop: 30,
    borderRadius: 40,
    justifyContent: 'center',
    alignSelf: 'center',
  },
  confirmButtonText: {color: 'white', fontSize: 14, textAlign: 'center'},
  borderStyleBase: {
    width: 30,
    height: 45,
  },
});
