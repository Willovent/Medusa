import React from 'react';
import { Text } from 'react-native';
import { useTheme } from 'react-native-paper';

export const Series = () => {
    const theme = useTheme();
    return <Text style={{color: theme.colors.primary}}>Series works</Text>;
};
