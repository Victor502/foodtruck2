import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Page from '../common/Page';
import TruckList from '../common/TruckList';
import Theme from '../../config/Theme.js';
import Data from '../../MockData';

class HomeScreen extends Component {
  state = {Loading: true};

  render() {
    return (
      <Page>
        <View style={styles.container}>
        {/* <View style={{height: 120, width: "100%", backgroundColor: 'blue'}}></View> */}
          <TruckList
            title={'Trucks'}
            navigation={this.props.navigation}
            data={Data.Trucks}
            pageType={'Truck'}
          />
        </View>
        {/* <View style={{height: 120, width: "100%", backgroundColor: 'orange'}}></View> */}
        <View style={{height: 120, width: "100%", backgroundColor: Theme.colors.carrotOrange}}></View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Theme.colors.seaShell,
    flex: 1,
  },
  title: {
    fontSize: 32,
    textAlign: 'center',
  },
});

export default HomeScreen;
