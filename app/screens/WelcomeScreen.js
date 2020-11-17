import React from 'react';
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  Image,
  SafeAreaView,
} from 'react-native';
import AppButton from '../components/AppButton';

import colors from '../config/colors';
function WelcomeScreen(props) {
  return (
    <View style={styles.background}>
      <View style={styles.logoContainer}>
        <Image
          resizeMode="contain"
          style={styles.logo}
          source={require('../assets/nike-logo.png')}
        />
        <Text style={styles.tagline}>JUST DO IT!</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <AppButton title="login" onPress={() => console.log('Tapped')} />
        <AppButton
          title="signup"
          color="third"
          onPress={() => console.log('Tapped')}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  logo: {
    width: 170,
    height: 170,
  },
  logoContainer: {
    position: 'absolute',
    top: '20%',
    alignItems: 'center',
  },
  tagline: {
    fontWeight: 'bold',
    fontSize: 40,
    color: 'black',
  },
  buttonsContainer: {
    padding: 30,
    width: '100%',
    alignItems: 'center',
  },
});

export default WelcomeScreen;
