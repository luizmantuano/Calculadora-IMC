import { View, StyleSheet, Text } from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';

const CustomDrawer = (props) => {
  return (
    <DrawerContentScrollView {...props}>
      <View>
        <DrawerItemList {...props} />
        <DrawerItem label='' onPress={() => props.navigation.openDrawer()} />
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawer;
