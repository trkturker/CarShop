import { View, Text, Image } from 'react-native'
import React from 'react'
import { useCars } from '../hooks/useCars';
import { FlatList } from 'react-native';
import IonIcons from '@expo/vector-icons/Ionicons';
import Lucide from '@expo/vector-icons/Lucide';




const CarsContainer = () => {
  const { data } = useCars();

  return (

    <View className='flex flex-1'>

      <FlatList
        data={data}
        keyExtractor={(item) => item.id}
        numColumns={2}
        scrollEnabled={true}
        columnWrapperStyle={{ justifyContent: 'space-between', gap: 10 }}
        renderItem={({ item }) => {

          const imageUrl = item.image;
          return (
            <View className='flex flex-1 mt-2 mb-2 bg-[#f3f5f7] rounded-2xl '>
              {item.id === '1' ? (
                <View className='flex flex-row m-2 p-2'>
                  <IonIcons name="heart-sharp" size={24} color="black" />
                </View>
              ) : (
                <View className='flex flex-row m-2 p-2'>
                  <IonIcons name="heart-outline" size={24} color="black" />
                </View>
              )}
              {/* <Image source={require(image)} className="w-full h-24" /> */}
              <Image
                // source={{ uri: imageUrl }}
                // source={{ uri: '../assets/BMW-X4.png' }}
                source={{ uri: 'https://www.pngplay.com/wp-content/uploads/13/BMW-X4-Transparent-PNG.png' }}
                className="w-full h-32 rounded-lg mb-2"
                resizeMode="contain"
              />

              <View className='m-2 p-2'>


                <Text className='text-base font-bold mb-1'>{item.name} {item.model}</Text>
                <View className='flex flex-row items-center gap-8'>
                  <Text className='text-sm '>
                    <Text>${item.price}</Text>
                  </Text>
                  <View className='flex flex-row items-center'>
                    <IonIcons name="star" size={12} color="orange" />
                    <Text>{item.rating}</Text>
                  </View>
                </View>
              </View>
            </View>
          );
        }}
      />

    </View>

  )
}

export default CarsContainer