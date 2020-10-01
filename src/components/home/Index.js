import React, {Component} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Page from '../common/Page';
import TruckList from '../common/TruckList';
import Theme from '../../style/Theme.js';
import Data from '../../MockData';

class HomeScreen extends Component {
  state = {Loading: true};

  render() {
    return (
      <Page>
        <View style={styles.container}>
          {/* <View style={{height: 120, width: "100%", backgroundColor: 'blue'}}></View> */}
          <View style={styles.searchBox}>
            <TextInput
              placeholder={'Search Here'}
              placeholderTextColor={'#000'}
              autoCapitalization={'none'}
              style={{flex: 1, padding: 0}}
            />
            <Ionicons name="search" size={20} />
          </View>
          <ScrollView
            horizontal
            scrollEventThrottle={1}
            showsHorizontalScrollIndicator={false}
            height={50}
            style={styles.chipsScrollView}
            contentInset={{
              top: 0,
              left: 0,
              bottom: 0,
              right: 20,
            }}
            contentContainerStyle={{
              paddingRight: Platform.OS === 'android' ? 20 : 0,
            }}>
            {Data.Categories.map((category, index) => (
              <TouchableOpacity
                key={index}
                style={styles.chipsItem}
                onPress={() => {}}>
                <Text>{category.name}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
          <TruckList
            title={'Trucks'}
            navigation={this.props.navigation}
            data={Data.Trucks}
            pageType={'Truck'}
          />
        </View>
        {/* <View style={{height: 120, width: "100%", backgroundColor: 'orange'}}></View> */}
        <View
          style={{
            height: 120,
            width: '100%',
            backgroundColor: Theme.colors.carrotOrange,
          }}></View>
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
  searchBox: {
    // position: 'absolute',
    // marginTop: Platform.OS === 'ios' ? 40 : 20,
    marginTop: 10,
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
    // position: 'absolute',
    // top: Platform.OS === 'ios' ? 90 : 80,
    marginTop: 10,
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
});

export default HomeScreen;
