import React from 'react';
import { Home } from '../screens/Home';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';

export default function App() {
    return (
        <SafeAreaView>
            <Home />
            <StatusBar style="auto" />
        </SafeAreaView>
    );
}