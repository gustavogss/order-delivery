import { Header } from '@/components/header';
import { Input } from '@/components/input';
import { Product } from '@/components/product';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { useCartStore } from '@/stores/cart-store';
import { formatCurrency } from '@/utils/functions/format-currency';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';

export default function Cart() {
    const cartStore = useCartStore()
    const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

    return (
        <View className='flex-1 pt-16'>
            <Header title='Seu carrinho' />
            <KeyboardAwareScrollView>
                <ScrollView>
                    <View className='p-5 flex-1'>
                        {
                            cartStore.products.length > 0 ?
                                <View className='border-b border-slate-700'>

                                    {
                                        cartStore.products.map((product) => (
                                            <Product key={product.id} data={product} />
                                        ))}
                                </View>
                                :
                                <Text className='font-body text-slate-400 text-center my-8'>
                                    Seu carrinho está vazio
                                </Text>
                        }
                        <View className='flex-row gap-2 items-center mt-5 mb-4 pl-5'>
                            <Text className='font-subtitle text-slate-300 text-xl'>
                                Total:
                            </Text>
                            <Text className='text-lime-400 text-2xl font-heading '>
                                {total}
                            </Text>
                        </View>
                        <Input placeholder='Informe o endereço de entrega completo com rua, bairro, número, cep ...' />
                    </View>
                </ScrollView>
            </KeyboardAwareScrollView>
        </View>
    );
}