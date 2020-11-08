import React from 'react';
import { AppHeader } from './AppHeader';
import { Stack } from './RootNavigator';
import { Settings } from '../pages/Settings';
import { Series } from '../pages/Series';
import { Serie } from '../pages/Serie';

export const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName="Main" headerMode="screen" screenOptions={{ header: AppHeader }}>
      <Stack.Screen name="Main" component={Series} options={{ headerTitle: 'Medusa' }} />
      <Stack.Screen name="Serie" component={Serie} options={{ headerTitle: 'Serie' }} />
      <Stack.Screen name="Settings" component={Settings} options={{ headerTitle: 'Settings' }} />
    </Stack.Navigator>
  );
};
