
import { Category } from '@/components/category';
import { Header } from '@/components/header';
import React, { useState } from 'react';
import { View, FlatList, SectionList, Text } from 'react-native';
import {CATEGORIES, MENU} from '@/utils/db/products'
import { Product } from '@/components/product';


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

            <SectionList           
            sections={MENU}
            keyExtractor={(item)=> item.id}
            stickySectionHeadersEnabled={false}
            renderItem={({item})=>(
              <Product data={item}/>
            )}
            renderSectionHeader={({section: {title}})=>(
                <Text className='text-slate-50 text-xl font-heading mt-9 mb-6'>{title}</Text>
            )}
            className='flex-1 p-5'
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 100}}
            />
        </View>
    );
}