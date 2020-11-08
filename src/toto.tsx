import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export const Toto = (props: any) => {
  const theme = useTheme();
  return <Text style={{ color: theme.colors.primary }}>test Toto</Text>;
};
