
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { View, Image, Text } from 'react-native';
import { PRODUCTS } from '@/utils/db/products';
import { formatCurrency } from '@/utils/functions/format-currency';
import { Button } from '@/components/button';
import { Feather } from '@expo/vector-icons';
import { ButtonBack } from '@/components/button-back';
import { useCartStore } from '@/stores/cart-store';


export default function Product() {
    const cartStore = useCartStore();
    const navigation = useNavigation();
    const {id} = useLocalSearchParams();

    const product = PRODUCTS.filter((item)=> item.id === id)[0]

    function handleAddCart(){
        cartStore.add(product)
        navigation.goBack()
    }

  return (
    <View className='flex-1' >
        <Image source={product.cover} resizeMode='cover' className='w-full h-52'/>
        <View className='flex-1 mt-8 p-5'>
            <Text className='text-lime-400 text-2xl font-heading my-2' >{formatCurrency(product.price)}</Text>
            <Text className='text-slate-400 font-body leading-6 text-base mb-6'>{product.description}</Text>
            {
                product.ingredients.map((ingredient) => (
                    <Text
                    key={ingredient}
                    className='text-slate-400 font-body text-base leading-6'
                    >{"\u2022"} {ingredient}</Text>
                ))
            }
        </View>
        <View className='p-5 gap-5 pb-8'>
                <Button onPress={handleAddCart}>
                    <Button.Icon>
                        <Feather name='plus-circle' size={20}/>
                    </Button.Icon>
                    <Button.Text>
                        Adicionar ao pedido
                    </Button.Text>
                </Button>
                <ButtonBack href='/' title='Voltar ao cardápio'/>
        </View>
    </View>
  );
}