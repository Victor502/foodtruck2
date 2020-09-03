import React, {Component} from 'react';
import TabNavigator from './navigation';
// import SplashScreen from 'react-native-splash-screen';

class App extends Component {
  state = {Loading: true};

  componentDidMount() {
    // do stuff while splash screen is shown
    // After having done stuff (such as async tasks) hide the splash screen
    // SplashScreen.hide();
  }

  render() {
    return <TabNavigator />;
  }
}

export default App;
