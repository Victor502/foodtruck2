import React from 'react';
import {Text, View, ScrollView, Image, StyleSheet} from 'react-native';
import Page from '../common/Page';

import Theme from '../../style/Theme';
// import FavTruckList from './FavTruckList';
import TruckList from '../common/TruckList';
import Data from '../../MockData';
import VendorTruckInfo from '../common/VendorTruckInfo';

const noImage = require('../../assets/NoImage.png');

const favTrucks = Data.Trucks.filter((truck) => truck.favTruck === true);
const user = Data.Users[0];
const isVendor = user.vender;
const userAvatar = (user && {uri: user.url}) || noImage;

const ProfileScreen = (props) => {
  // console.log('Data', Data);
  // console.log('favTrucks', favTrucks);
  // console.log('isVendor', isVendor);
  // console.log('props', props)
  return (
    <Page>
      {isVendor ? (
        <VendorTruckInfo />
      ) : (
        <View>
          <View style={styles.topStyle}>
            <Text style={styles.titleStyle}>{user.name}</Text>
            <Image source={userAvatar} style={styles.noImageStyle} />
          </View>
          <View style={styles.bottomStyle}>
            <TruckList
              title={'Favorite Trucks'}
              // navigation={props.navigation}
              // route={props.route}
              data={favTrucks}
              pageType={'FavTruck'}
            />
          </View>
        </View>
      )}
    </Page>
  );
};

const styles = StyleSheet.create({
  topStyle: {
    height: Theme.dimensions.deviceHeight / 3,
    backgroundColor: Theme.colors.seaShell,
    alignItems: 'center',
  },
  titleStyle: {
    textAlign: 'center',
    marginTop: '10%',
    marginBottom: 20,
    fontSize: 24,
  },
  noImageStyle: {
    height: 120,
    width: 120,
    borderRadius: 120 / 2,
  },
  bottomStyle: {
    backgroundColor: Theme.colors.lightSeaGreen,
    height: Theme.dimensions.deviceHeight - Theme.dimensions.deviceHeight / 3,
  },
});

export default ProfileScreen;
