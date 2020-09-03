import React from 'react';
import {Image, View, Text, TouchableOpacity, StyleSheet, Pressable} from 'react-native';
import {useNavigation} from '@react-navigation/native';
// import {useRoute} from '@react-navigation/native';

const noTruckImage = require('../../assets/mock/Trucks/noTruckImage.jpg');

const TruckListItem = (props) => {
  const navigation = useNavigation();
  const onTruckItemPress = () => {
    navigation.navigate(props.pageType, {data: props.data});
  };
  const source = (props.url && {uri: props.url}) || noTruckImage;
  // console.log('props', props);
  return (
    <Pressable onPress={() => onTruckItemPress()}>
      <View style={styles.truckContainer}>
        <Image source={source} style={styles.imageStyle} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{props.title}</Text>
          <Text>{props.description}</Text>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  truckContainer: {
    flexDirection: 'row',
    margin: 5,
  },
  imageStyle: {
    height: 60,
    width: 60,
    resizeMode: 'cover',
  },
  textContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default TruckListItem;
