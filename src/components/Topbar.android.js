import React, { Component } from 'react';
import {
  ToolbarAndroid,
  StyleSheet,
} from 'react-native';

type Props = {};
class Topbar extends Component<Props> {
  render() {
    return (
      <ToolbarAndroid
        style={styles.topbar}
        title="FlagNotify"
      />
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#e9eaed',
    height: 56,
    alignSelf: 'stretch',

  },
});

export default Topbar;

