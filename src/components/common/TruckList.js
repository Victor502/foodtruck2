import React, {Component} from 'react';
import {View, Text, StyleSheet, ScrollView, FlatList} from 'react-native';
import TruckListItem from '../common/TruckListItem';
// import TruckCard from '../common/TruckCard';
// import Data from '../../MockData';

const TruckList = (props) => {
  const {navigation, data, route} = props;
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
      <FlatList
        data={data}
        renderItem={({item}) => {
          // console.log('item', item);
          return (
            <TruckListItem
              key={item.id}
              title={item.title}
              description={item.description}
              url={item.url}
              data={item}
              pageType={props.pageType}
            />
          );
        }}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    margin: 10,
  },
  title: {
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginVertical: '5%',
  },
});

export default TruckList;
