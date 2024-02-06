import { Slot } from 'expo-router';
import React from 'react';
import { SafeAreaView } from 'react-native';
import {
    useFonts,
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold,
} from '@expo-google-fonts/inter';
import { Loading } from '../components/loading';


export default function Layout() {
    const [fonstLoad] = useFonts({
        Inter_400Regular,
        Inter_500Medium,
        Inter_600SemiBold,
        Inter_700Bold,
    });

    if (!fonstLoad) {
        return <Loading />
    }
    return (
        <SafeAreaView className='bg-slate-900 flex-1 '>
            <Slot />
        </SafeAreaView>
    );
}