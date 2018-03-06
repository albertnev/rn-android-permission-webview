import React, { Component } from 'react';
import {
  Platform,
  PermissionsAndroid
} from 'react-native';

import PermissionWebview from '../native/PermissionWebview';

export default class MirroredCameraScreen extends Component {
  static navigationOptions = ({navigation}) => {
    return {
      title: 'WebView',
      headerStyle: { backgroundColor: '#336384' },
      headerTitleStyle: { color: 'white' },
      headerTintColor: 'white',
    }
  };

  constructor(props){
    super(props);
    this.state = {};
  }
  
  render() {
    return (
      <PermissionWebview 
        style={{flex: 1}}
        mediaPlaybackRequiresUserAction={false}
        domStorageEnabled={true}
        allowsInlineMediaPlayback={true}
        source={{uri: this.website}} 
        sourceUri={this.website} 
        allowFileAccessFromFileURLs={true}
        allowUniversalAccessFromFileURLs={true}
      />
    );
  }
}
