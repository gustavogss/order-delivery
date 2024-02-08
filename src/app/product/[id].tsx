
import { useLocalSearchParams } from 'expo-router';
import { View, Image, Text } from 'react-native';
import { PRODUCTS } from '@/utils/db/products';
import { formatCurrency } from '@/utils/functions/format-currency';


export default function Product() {
    const {id} = useLocalSearchParams()

    const product = PRODUCTS.filter((item)=> item.id === id)[0]

  return (
    <View className='flex-1' >
        <Image source={product.cover} resizeMode='cover' className='w-full h-52'/>
        <View className='flex-1 mt-8 p-5'>
            <Text className='text-lime-400 text-2xl font-heading my-2' >{formatCurrency(product.price)}</Text>
            <Text className='text-slate-400 font-body leading-6 text-base mb-6'>{product.description}</Text>
       
        </View>
    </View>
  );
}