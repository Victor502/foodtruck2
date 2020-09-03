import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Image,
  Platform,
  Dimensions,
} from 'react-native';
import Page from '../common/Page';
import MapView, {Marker, PROVIDER_GOOGLE, Callout} from 'react-native-maps';
import Data from '../../MockData';
import RNLocation from 'react-native-location';

const {width, height} = Dimensions.get('window');
const CARD_HEIGHT = 220;
const CARD_WIDTH = width * 0.8;
const SPACING_FOR_CARD_INSET = width * 0.1 - 10;

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

  const markers = Data.Trucks.map((truck) => {

    return (
      <Marker
        key={truck.id}
        coordinate={truck.latlng}
        // title={truck.title}
        // description={truck.description}
        image={require('../../assets/images/map_marker.png')}
        // pinColor="red"
      >
        <Callout tooltip>
          <View>
            <View style={styles.bubble}>
              <Text style={styles.name}>{truck.title}</Text>
              <Text style={{marginBottom: Platform.OS === 'ios' ? 10 : -30}}>{truck.description}</Text>
              <Text style={{paddingBottom: Platform.OS === 'ios' ? 0 : 40}}><Image style={styles.image} source={{uri: truck.url}} /></Text>
            </View>
            <View style={styles.arrowBorder} />
            <View style={styles.arrow} />
          </View>
        </Callout>
      </Marker>
    );
  });

  return (
    <Page>
      <View style={styles.container}>
        {mylatitude !== 0 && (
          <MapView
            provider={PROVIDER_GOOGLE}
            showsUserLocation
            followsUserLocation
            showsMyLocationButton
            style={styles.mapContainer}
            initialRegion={{
              latitude: 38.25667, // mylatitude,
              longitude: -85.7514, // mylongitude,
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
  // container: {
  //   ...StyleSheet.absoluteFillObject,
  //   height: 400,
  //   width: 400,
  //   justifyContent: 'flex-end',
  //   alignItems: 'center',
  // },
  // mapContainer: {
  //   ...StyleSheet.absoluteFillObject,
  // },
  container: {
    flex: 1,
  },
  mapContainer: {
    flex: 1,
  },
  bubble: {
    flexDirection: 'column',
    alignSelf: 'flex-start',
    backgroundColor: '#fff',
    borderRadius: 6,
    borderColor: '#ccc',
    borderWidth: 0.5,
    padding: 15,
    width: 150,
  },
  //Arrow below bubble
  arrow: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#fff',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -32,
  },
  arrowBorder: {
    backgroundColor: 'transparent',
    borderColor: 'transparent',
    borderTopColor: '#007a87',
    borderWidth: 16,
    alignSelf: 'center',
    marginTop: -0.5,
  },
  name: {
    fontSize: 16,
    marginBottom: 5,
  },
  image: {
    width: 120,
    height: 80,
    resizeMode: 'cover'
  },
  searchBox: {
    position: 'absolute',
    marginTop: Platform.OS === 'ios' ? 40 : 20,
    flexDirection: 'row',
    backgroundColor: '#fff',
    width: '90%',
    alignSelf: 'center',
    borderRadius: 5,
    padding: 10,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  chipsScrollView: {
    position: 'absolute',
    top: Platform.OS === 'ios' ? 90 : 80,
    paddingHorizontal: 10,
  },
  chipsIcon: {
    marginRight: 5,
  },
  chipsItem: {
    flexDirection: 'row',
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 8,
    paddingHorizontal: 20,
    marginHorizontal: 10,
    height: 35,
    shadowColor: '#ccc',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 10,
  },
  scrollView: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    paddingVertical: 10,
  },
  endPadding: {
    paddingRight: width - CARD_WIDTH,
  },
  card: {
    // padding: 10,
    elevation: 2,
    backgroundColor: '#FFF',
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginHorizontal: 10,
    shadowColor: '#000',
    shadowRadius: 5,
    shadowOpacity: 0.3,
    shadowOffset: {x: 2, y: -2},
    height: CARD_HEIGHT,
    width: CARD_WIDTH,
    overflow: 'hidden',
  },
  cardImage: {
    flex: 3,
    width: '100%',
    height: '100%',
    alignSelf: 'center',
  },
  textContent: {
    flex: 2,
    padding: 10,
  },
  cardtitle: {
    fontSize: 12,
    // marginTop: 5,
    fontWeight: 'bold',
  },
  cardDescription: {
    fontSize: 12,
    color: '#444',
  },
  markerWrap: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 50,
    height: 50,
  },
  marker: {
    width: 30,
    height: 30,
  },
  button: {
    alignItems: 'center',
    marginTop: 5,
  },
  signIn: {
    width: '100%',
    padding: 5,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  textSign: {
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default MapScreen;
