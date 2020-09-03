import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Pressable} from 'react-native';
import Page from '../common/Page';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
import Data from '../../MockData';
import RNLocation from 'react-native-location';

const MapScreen = (props) => {
  const [truckMarkers, setTruckMarkers] = useState([]);
  const [mylatitude, setMylatitude] = useState(0);
  const [mylongitude, setMylongitude] = useState(0);

  useEffect(() => {
    getMyLocation();
  }, []);

  const getMyLocation = async () => {
    try {
      RNLocation.configure({
        distanceFilter: 5.0,
      });

      let myLocation = await RNLocation.requestPermission({
        ios: 'whenInUse',
        android: {
          detail: 'coarse',
        },
      });
      if (myLocation) {
        this.locationSubscription = RNLocation.subscribeToLocationUpdates(
          (locations) => {
            console.log('locations', locations);
            setMylatitude(locations[0].latitude);
            setMylongitude(locations[0].longitude);
          },
        );
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const marker = {
    latlng: {latitude: mylatitude, longitude: mylongitude},
    title: 'ME',
    description: 'This is a description',
  };
  const markers = Data.Trucks.map((truck) => {
    return (
      <Marker
        key={truck.id}
        coordinate={truck.latlng}
        title={truck.title}
        description={truck.description}
        pinColor="red"
      />
    );
  });

  console.log('props', props);
  console.log('mylatitude', mylatitude);
  console.log('mylongitude', mylongitude);
  return (
    <Page>
      <View style={styles.container}>
        {mylatitude !== 0 && (
          <MapView
            provider={'google'}
            showsUserLocation
            followsUserLocation
            showsMyLocationButton
            style={styles.mapContainer}
            initialRegion={{
              latitude: mylatitude, // 38.25667,
              longitude: mylongitude, // -85.7514,
              latitudeDelta: 0.005,
              longitudeDelta: 0.005,
            }}
            loadingEnabled={true}>
            {markers}
          </MapView>
        )}
      </View>
    </Page>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
});

export default MapScreen;
