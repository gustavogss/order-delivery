import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';


export default function Layout() {
  return (
    <SafeAreaView className='bg-slate-900 flex-1 '>
        <Slot />
    </SafeAreaView>
  );
}