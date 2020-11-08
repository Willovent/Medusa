import AsyncStorage from '@react-native-community/async-storage';

export const getItem = async <T>(key: string): Promise<T | null> => {
  const value = await AsyncStorage.getItem(key);
  if (value !== null) {
    try {
      return JSON.parse(value) as T;
    } catch {
      return value as any;
    }
  }

  return null;
};

export const setItem = async <T>(key: string, value: T): Promise<void> => {
  if (typeof value === 'string') {
    await AsyncStorage.setItem(key, value);
  } else {
    await AsyncStorage.setItem(key, JSON.stringify(value));
  }
};
