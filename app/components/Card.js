import React from 'react';
import { View, StyleSheet, Image } from 'react-native';

import colors from '../config/colors';
import AppText from './AppText';

function Card({ title, subTitle, image }) {
  return (
    <View style={styles.card}>
      <Image style={styles.image} source={image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>{title}</AppText>
        <AppText style={styles.subTitle}>{subTitle}</AppText>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    borderRadius: 15,
    backgroundColor: colors.primary,
    marginBottom: 20,
    overflow: 'hidden',
    shadowColor: 'grey',
    shadowOffset: { width: 0, heigth: 10 },
    shadowRadius: 1,
    shadowRadius: 10,
    elevation: 20,
  },
  detailsContainer: {
    padding: 20,
  },
  image: {
    width: '100%',
    height: 200,
  },
  title: {
    marginBottom: 10,
    fontSize: 25,
  },
  subTitle: {
    color: 'black',
    fontWeight: 'bold',
  },
});

export default Card;
