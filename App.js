import React, { Component } from 'react';
import { StackNavigator } from 'react-navigation';

import MirroredCameraScreen from './app/screens/MirroredCameraScreen';

const MainApp = StackNavigator(
  {
    Camera: {screen: MirroredCameraScreen}
  },{
    headerMode: 'screen'
  }
);

export default class App extends Component {
  render() {
    return (
      <MainApp />
    );
  }
}
