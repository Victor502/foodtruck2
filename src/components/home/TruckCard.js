import React from 'react';
import {ScrollView, View, Text, Image, StyleSheet} from 'react-native';
import Page from '../common/Page';

const noTruckImage = require('../../assets/images/noTruckImage.jpg');

const TruckCard = (props) => {
  const data = props.route.params.data;
  // console.log('data', data, props);

  const source = (data && {uri: data.url}) || noTruckImage;
  return (
    <Page>
      <ScrollView>
        <Text style={{textAlign: 'center', fontSize: 28, marginTop: 10}}>
          {data.title}
        </Text>
        <View style={styles.topContainer}>
          <Image source={source} style={styles.imageStyle} />
          <Text style={styles.description}>{data.description}</Text>
        </View>
      </ScrollView>
    </Page>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: '5%',
  },
  imageStyle: {
    height: 200,
    width: 200,
  },
  description: {
    fontSize: 18,
    marginVertical: '5%',
  },
});

export default TruckCard;
