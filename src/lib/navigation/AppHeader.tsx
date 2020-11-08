import React from 'react';
import { StackHeaderProps } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native';
import { Appbar, Avatar, useTheme } from 'react-native-paper';

export const AppHeader = ({ scene, previous, navigation }: StackHeaderProps) => {
  const { options } = scene.descriptor;
  const theme = useTheme();

  return (
    <Appbar.Header theme={{ colors: { primary: theme.colors.surface } }}>
      {previous ? (
        <Appbar.BackAction onPress={navigation.goBack} color={theme.colors.primary} />
      ) : (
        <TouchableOpacity style={{ marginLeft: 10 }} onPress={() => (navigation as any).openDrawer()}>
          <Avatar.Image style={{ backgroundColor: 'transparent' }} size={40} source={require('../../../assets/medusa_logo.png')} />
        </TouchableOpacity>
      )}
      <Appbar.Content
        title={options.headerTitle}
        titleStyle={{
          fontSize: 18,
          fontWeight: 'bold',
          color: theme.colors.primary
        }}
      />
    </Appbar.Header>
  );
};
