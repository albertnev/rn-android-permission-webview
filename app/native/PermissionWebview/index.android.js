import PropTypes from 'prop-types';
import {requireNativeComponent, ViewPropTypes} from 'react-native';

// El nom a "name" no importa
var mcs = {
  name: 'PermissionWebview',
  propTypes: {
    sourceUri: PropTypes.string,
	  ...ViewPropTypes
  }
};

module.exports = requireNativeComponent('PermissionWebviewViewManager', mcs);