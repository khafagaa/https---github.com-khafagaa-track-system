import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    backgroundColor: '#ffeaa7',
  },
  ImgView: {justifyContent: 'flex-start', alignItems: 'center'},
  Waiting: {
    width: '100%',
    height: '80%',
    borderRadius: 15,
    resizeMode: 'cover',
    alignSelf: 'flex-start',
    justifyContent: 'flex-start',
  },
  Txt: {fontSize: 30, marginTop: 30, color: '#d63031'},
});
