import React from 'react';
import { View, Image, Text, TouchableOpacity } from 'react-native';
import { Feather } from '@expo/vector-icons'
import colors from 'tailwindcss/colors';

type HeaderProps = {
    title: string
    qtdItems?: number
}

export function Header({ title, qtdItems = 0 }: HeaderProps) {
    return (
        <View className='flex-row items-center border-b border-s-slate-700 pb-5 mx-5'>
            <View className="flex-1">
                <Image
                    source={require("@/assets/logo.png")}
                    className='h-4 w-40'
                />
                <Text className='text-slate-50 text-xl mt-3 font-heading'>{title}</Text>
            </View>

            {qtdItems > 0 && (
                <TouchableOpacity className='relative' activeOpacity={0.7}>
                    <View className='bg-lime-300 w-4 h-4 rounded-full items-center justify-center top-2 z-10 -right-3.5'>
                        <Text className='font-bold text-slate-900 text-xs'>{qtdItems}</Text>
                    </View>
                    <Feather name='shopping-cart' color={colors.white} size={24} />
                </TouchableOpacity>
            )
            }
        </View>
    );
}