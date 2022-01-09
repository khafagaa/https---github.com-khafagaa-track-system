import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import MapView, {PROVIDER_GOOGLE, Marker, Polyline} from 'react-native-maps';
import Geolocation from '@react-native-community/geolocation';

export default function Track() {
  const [myloc, setMyloc] = useState({
    latitude: 30.07248648404122,
    longitude: 31.335291543879084,
  });
  const [coordinates] = useState([
    myloc,
    {
      latitude: 30.070003429164505,
      longitude: 31.335876975111656,
    },
    {
      latitude: 30.066856650003288,
      longitude: 31.336374218079456,
    },
  ]);

  //*set My Location per second
  useEffect(() => {
    Geolocation.getCurrentPosition(
      //Will give you the current location
      position => {
        //getting the Longitude from the location json
        const currentLongitude = JSON.stringify(position.coords.longitude);
        //getting the Latitude from the location json
        const currentLatitude = JSON.stringify(position.coords.latitude);

        const lat_long = {
          latitude: parseFloat(currentLatitude),
          longitude: parseFloat(currentLongitude),
        };
        //* make sure your emulator has been set on right location
        setMyloc(lat_long);
      },
      error => alert(error.message),
      {
        enableHighAccuracy: true,
        timeout: 20000,
        maximumAge: 1000,
      },
    );
  });
  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 30.07107819376,
          longitude: 31.33562941569,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}>
        <MapView.Circle
          center={myloc}
          radius={25}
          strokeWidth={5}
          strokeColor="#3399ff"
          fillColor="#80bfff"
        />
        <Marker coordinate={coordinates[1]} />
        <Marker coordinate={coordinates[2]} />
        <Polyline
          coordinates={coordinates}
          strokeColor="red" // fallback for when `strokeColors` is not supported by the map-provider
          strokeColors={['#7F0000']}
          strokeWidth={3}
        />
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1, //the container will fill the whole screen.
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
