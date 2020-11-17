import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import AppText from './AppText';
import Swipeable from 'react-native-gesture-handler/Swipeable';

function Listitem({ title, subTitle, image, onPress, renderRightActions }) {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={'#f8f4f4'} onPress={onPress}>
        <View style={styles.container}>
          <Image style={styles.image} source={image} />
          <View>
            <AppText style={styles.title}>{title}</AppText>
            <AppText style={styles.subTitle}>{subTitle}</AppText>
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  subTitle: {
    color: 'gray',
  },
  title: {
    fontWeight: '700',
  },
});
export default Listitem;
