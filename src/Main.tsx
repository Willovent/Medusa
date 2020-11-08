import React from 'react';
import { Provider as PaperProvider, DarkTheme } from 'react-native-paper';
import { RootNavigator } from './lib/navigation/RootNavigator';

export const Main = () => {
  return (
    <PaperProvider
      theme={{
        ...DarkTheme,
        colors: { ...DarkTheme.colors, primary: '#26b043' }
      }}
    >
      <RootNavigator />
    </PaperProvider>
  );
};
