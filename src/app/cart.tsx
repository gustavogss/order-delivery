import { Header } from '@/components/header';
import { Input } from '@/components/input';
import { Product } from '@/components/product';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProductCartProps, useCartStore } from '@/stores/cart-store';
import { formatCurrency } from '@/utils/functions/format-currency';
import React from 'react';
import { Alert, ScrollView, Text, View } from 'react-native';
import { Button } from '@/components/button';
import { Feather } from '@expo/vector-icons';
import { ButtonBack } from '@/components/button-back';

export default function Cart() {
    const cartStore = useCartStore()
    const total = formatCurrency(cartStore.products.reduce((total, product) => total + product.price * product.quantity, 0))

    function handlerProductRemove(product: ProductCartProps){
        Alert.alert("Remover", `Deseja remover ${product.title} do carrinho?`,[
            {
                text: "Cancelar"
            },
            {
                text: "Remover",
                onPress: () => cartStore.remove(product.id)
            }
        ])
    } 

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
                                            <Product key={product.id} data={product} onPress={()=>handlerProductRemove(product)}/>
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
            <View className='p-5 gap-5'>
                <Button>
                    <Button.Text>Enviar Pedido</Button.Text>
                    <Button.Icon>
                        <Feather name='arrow-right-circle' size={20}/>
                    </Button.Icon>
                </Button>
                <ButtonBack title='Voltar ao cardápio' href='/'/>
            </View>
        </View>
    );
}