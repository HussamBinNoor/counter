import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  fontFamily: 'Fraunces',
  text: {color: 'grey', textAlign: 'center', marginBottom: 10},
  viewbtm: {alignItems: 'center', justifyContent: 'center'},
  board1img: {
    height: 223,
    width: '100%',
  },
  darklogo: {
    alignSelf: 'center',
    position: 'absolute',
    height: 89.71,
    width: 94,
  },
  input: {
    borderRadius: 2,
    borderWidth: 0.5,
    color: 'black',
    tintColor: 'black',
    paddingHorizontal: 25,
    borderColor: '#9F909F',
  },
  mainview: {
    margin: 20,
    backgroundColor: '#FCFCFC',
  },
  text: {
    color: 'black',
    fontSize: 20,
    marginBottom: 20,
    textAlign: 'center',
  },
  links: {
    height: 44,
    width: 44,
    marginHorizontal: 12,
    borderWidth: 2,
    borderRadius: 50,
    borderColor: 'rgba(16, 11, 0, 0.4)',
    padding: 8,
  },
  link: {
    height: 44,
    width: 44,
    marginHorizontal: 12,
  },
  img: {
    width: '99%',
    height: '100%',
  },
  line: {flex: 1, height: 1.5, backgroundColor: 'rgba(236, 240, 245, 1)'},
  termtext: {color: 'grey', fontSize: 12, marginTop: 10},
  togglemain: {
    backgroundColor: 'rgba(218, 218, 218, 1)',
    margin: 10,
    height: 12,
    width: 21.73,
    borderRadius: 10,
  },
  toggleinside: {
    backgroundColor: 'white',
    height: 11,
    width: 4.26,
    borderRadius: 20,
    marginHorizontal: 2,
    marginTop: 0.5,
  },
  alreadytext: {
    color: 'black',
    textAlign: 'center',
    fontSize: 14,
    marginTop: 10,
  },
  ortext: {
    marginHorizontal: 10,
    color: 'black',
    fontSize: 14,
    fontWeight: 'bold',
  },
  secview: {
    height: '100%',
    backgroundColor: '#FCFCFC',
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});
