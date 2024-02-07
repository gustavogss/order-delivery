
import { Header } from '@/components/header';
import React from 'react';
import { View } from 'react-native';


export default function Home() {
    return (
        <View className='flex-1 pt-20'>
           <Header title="Faça o seu pedido" qtdItems={1}/>
        </View>
    );
}