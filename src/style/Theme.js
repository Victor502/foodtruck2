import {Dimensions} from 'react-native';

const deviceWidth = Dimensions.get('screen').width;
const deviceHeight = Dimensions.get('screen').height;

const lightGray = '#a8a8a8';
const carrotOrange = '#ED9B40';
const darkJungleGreen = '#00120B';
const lightSeaGreen = '#03B5AA';
const madderLake = '#C3423F';
const seaShell = '#FDF1ED';

export default {
  dimensions: {
    deviceWidth: deviceWidth,
    deviceHeight: deviceHeight,
  },
  colors: {
    white: '#fff',
    lightGray: lightGray,
    carrotOrange: carrotOrange,
    darkJungleGreen: darkJungleGreen,
    lightSeaGreen: lightSeaGreen,
    madderLake: madderLake,
    seaShell: seaShell,
  },
};
