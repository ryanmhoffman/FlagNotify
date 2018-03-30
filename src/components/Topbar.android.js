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
        titleColor="white"
        actions={[{title: 'Settings', show: 'always'}]}
      />
    );
  }
}

const styles = StyleSheet.create({
  topbar: {
    backgroundColor: '#bf0a30',
    height: 56,
    alignSelf: 'stretch',
  },
});

export default Topbar;

