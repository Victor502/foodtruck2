import React from 'react';
import {StyleSheet, Platform, Text, Dimensions} from 'react-native';
import {Header as RNEHeader, Button} from 'react-native-elements';
// import {withNavigation} from 'react-navigation';

const {width} = Dimensions.get('window');

const BackButton = () => {
  const onPress = () => {
    console.log('add back button')
    };
  return <Button title="back" type="clear" onPress={onPress} />
};

function getCenterComponent({title}) {
  if (title && typeof title === 'string')
    return <Text style={styles.titleText}>{title}</Text>;
  return title;
}

function getRightComponent({rightComponent}) {
  return rightComponent;
}

function getLeftComponent({leftComponent, onPressBack}) {
  if (leftComponent === 'back') return <BackButton onPressBack={onPressBack} />;
  return leftComponent;
}

const statusBarColor = Platform.OS === 'ios' ? 'dark-content' : 'light-content';
const Header = props => {
  return (
    <RNEHeader
      statusBarProps={{barStyle: statusBarColor}}
      barStyle="light-content" // or directly
      containerStyle={[styles.containerStyle, props.containerStyle]}
      leftComponent={getLeftComponent(props)}
      centerComponent={getCenterComponent(props)}
      rightComponent={getRightComponent(props)}
    />
  );
};

const fontSizer = () => {
  if (width > 400) {
    return 25;
  } else if (width > 250) {
    return 18;
  } else {
    return 12;
  }
};

const styles = StyleSheet.create({
  containerStyle: {
    backgroundColor: '#fff',
    paddingTop: 0,
    margin: 0,
    height: 60,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
  },
  titleText: {
    fontSize: fontSizer(),
    marginBottom: 0,
    marginLeft: 0,
    fontWeight: 'bold',
  },
  backArrow: {
    fontSize: 22,
    height: '100%',
    width: 40,
  },
});

export default Header;
