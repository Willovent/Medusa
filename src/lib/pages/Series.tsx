import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, ViewStyle } from 'react-native';
import { useTheme } from 'react-native-paper';
import { LiteSerie } from '../models/series-response';
import { medusaClient } from '../services/medusa-client';

export const Series = () => {
  const [series, setSeries] = useState<LiteSerie[]>([]);
  const { colors } = useTheme();

  useEffect(() => {
    medusaClient.getSeries().then((x) => x && setSeries(x));
  });

  return <FlatList data={series} renderItem={({ item }) => Item({ item, colors })} keyExtractor={(item) => item.slug} />;
};

const Item = ({ item, colors }: { item: LiteSerie; colors: ReactNativePaper.ThemeColors }) => {
  const styles = withTheme(colors);
  return (
    <View style={styles.listItem}>
      <Image source={{ uri: item.posterUri }} style={{ width: 60, height: 60, borderRadius: 30 }} />
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
      </View>
      <TouchableOpacity style={{ height: 50, width: 50, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{ color: 'green' }}>Call</Text>
      </TouchableOpacity>
    </View>
  );
};

const withTheme = (colors: ReactNativePaper.ThemeColors): { [key: string]: ViewStyle } => ({
  listItem: {
    margin: 10,
    padding: 10,
    width: '80%',
    backgroundColor: colors.background,
    flex: 1,
    alignSelf: 'center',
    flexDirection: 'row',
    borderRadius: 5
  }
});
