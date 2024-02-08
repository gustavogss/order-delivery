import React from 'react';
import { useLocalSearchParams } from 'expo-router';

import { View } from 'react-native';

export default function Product() {
    const {id} = useLocalSearchParams()
    
  return (
    <View className='flex-1' >

    </View>
  );
}