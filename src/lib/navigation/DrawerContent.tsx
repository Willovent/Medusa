import { MaterialCommunityIcons } from '@expo/vector-icons';

import React from 'react';
import { StyleSheet } from 'react-native';
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Drawer } from 'react-native-paper';
import Animated from 'react-native-reanimated';

type Props = DrawerContentComponentProps<{}>;

export const DrawerContent = (props: Props) => {
  return (
    <DrawerContentScrollView {...props}>
      <Animated.View style={[styles.drawerContent]}>
        <Drawer.Section style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => <MaterialCommunityIcons name="tune" color={color} size={size} />}
            label="Parameters"
            onPress={() => {
              props.navigation.navigate('Settings');
            }}
          />
        </Drawer.Section>
      </Animated.View>
    </DrawerContentScrollView>
  );
};

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1
  },
  drawerSection: {
    marginTop: 15
  }
});
