import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text } from 'react-native';

export const Serie = () => {
  const theme = useTheme();
  return <Text style={{color: theme.colors.primary}}>Serie works</Text>;
};
