
import { Category } from '@/components/category';
import { Header } from '@/components/header';
import React, { useState } from 'react';
import { View, FlatList } from 'react-native';
import {CATEGORIES} from '@/utils/db/products'


export default function Home() {
    const [category, setCategory] = useState(CATEGORIES[0]);

    function handleCategorySelected(selectedCategory: string){
        setCategory(selectedCategory)
    }

    return (
        <View className='flex-1 pt-20'>
           <Header title="Faça o seu pedido" qtdItems={1}/>
            <FlatList 
            horizontal
            showsHorizontalScrollIndicator={false}
            className='max-h-10 mt-5'
            contentContainerStyle={{gap: 12, paddingHorizontal: 20}}
            data={CATEGORIES}
            keyExtractor={(item)=> item}
            renderItem={({item})=>(
                <Category 
                title={item}
                isSelected={item === category} 
                onPress={()=> handleCategorySelected(item)}/>
            )}
            />
        </View>
    );
}