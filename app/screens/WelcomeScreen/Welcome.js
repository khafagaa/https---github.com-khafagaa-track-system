import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator, Image} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import sagaAction from '../../saga/saga.action';
import Styles from './Styles';
const Welcome = ({navigation}) => {
  const dispatch = useDispatch();
  const load = useSelector(state => state.loader.loader);

  useEffect(() => {
    dispatch({type: sagaAction.SET_LOAD});
    setTimeout(() => {
      dispatch({type: sagaAction.GET_DATA});
    }, 2000);
  }, []);
  useEffect(() => {
    !load && navigation.push('Tracking');
  });
  return (
    <View style={Styles.container}>
      <View style={Styles.ImgView}>
        <Image
          style={[Styles.Waiting]}
          source={{
            uri: 'https://c.tenor.com/2P5_HJLMIkEAAAAM/im-finish-running.gif',
          }}
        />
        <Text style={Styles.Txt}> Ready For Runnnnnnn ????</Text>
      </View>
      <ActivityIndicator size="large" color="#d63031" animating={load} />
    </View>
  );
};

export default Welcome;
