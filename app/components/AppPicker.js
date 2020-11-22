import React, { useState } from 'react';
import {
  Button,
  Modal,
  Platform,
  StyleSheet,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';

function AppPicker({ icon, placeholder, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={'black'}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{placeholder}</AppText>
          <MaterialCommunityIcons
            name={'chevron-down'}
            size={20}
            color={'black'}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          <Button title="Close" onPress={() => setModalVisible(false)} />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightgray',
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 15,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
