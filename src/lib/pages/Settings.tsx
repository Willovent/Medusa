import { Button, TextInput } from 'react-native-paper';
import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import { getItem, setItem } from '../services/store';

export const Settings = () => {
  let [uri, setUri] = useState<string>();
  let [apiKey, setApiKey] = useState<string>();

  useEffect(() => {
    getItem<string>('uri').then((x) => x && setUri(x));
    getItem<string>('apiKey').then((x) => x && setApiKey(x));
  }, []);

  const saveConfiguration = async () => {
    await setItem('uri', uri);
    await setItem('apiKey', apiKey);
  };

  return (
    <View>
      <TextInput label="Uri" value={uri} onChangeText={(text) => setUri(text)} />
      <TextInput label="Api key" value={apiKey} onChangeText={(text) => setApiKey(text)} />
      <Button onPress={saveConfiguration}>Save</Button>
    </View>
  );
};
