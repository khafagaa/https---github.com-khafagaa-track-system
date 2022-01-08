import Reactotron from 'reactotron-react-native';
import sagaPlugin from 'reactotron-redux-saga';

const reactotron = Reactotron.setAsyncStorageHandler() // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure() // controls connection & communication settings
  .use(sagaPlugin())
  .useReactNative() // add all built-in react native plugins
  .connect();

export default reactotron;
