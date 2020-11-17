import React from 'react';
import { StyleSheet, View } from 'react-native';

function ListItemSeparator() {
  return <View style={styles.separator}></View>;
}

const styles = StyleSheet.create({
  separator: {
    width: '100%',
    height: 1,
    backgroundColor: '#f80000',
  },
});
export default ListItemSeparator;
