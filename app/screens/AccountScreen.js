import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import Icon from '../components/Icon';

import Listitem from '../components/ListItem';
import ListItemSeparatorComponent from '../components/ListItemSeparator';
import Screen from '../components/Screen';

const menuItems = [
  {
    title: 'My Listings',
    icon: {
      name: 'format-list-bulleted',
      backgroundColor: 'blue',
    },
  },
  {
    title: 'My Messages',
    icon: {
      name: 'email',
      backgroundColor: 'red',
    },
  },
];

function AccountScreen(props) {
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <Listitem
          title="Sava Zeb"
          subTitle="sava.zeb72@gmail.com"
          image={require('../assets/mosh.jpg')}
        />
      </View>
      <View style={styles.container}>
        <FlatList
          data={menuItems}
          keyExtractor={(menuItems) => menuItems.title}
          ItemSeparatorComponent={ListItemSeparatorComponent}
          renderItem={({ item }) => (
            <Listitem
              title={item.title}
              IconComponent={
                <Icon
                  name={item.icon.name}
                  backgroundColor={item.icon.backgroundColor}
                />
              }
            />
          )}
        />
      </View>
      <Listitem
        title="Log Out"
        IconComponent={<Icon name="logout" backgroundColor="#ffe66d" />}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  screen: {
    backgroundColor: 'white',
  },
  container: {
    marginVertical: 20,
  },
});

export default AccountScreen;
