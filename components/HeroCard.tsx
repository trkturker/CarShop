// rnfe

import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';

const HeroCard = () => {
  return (
    <View className="flex flex-row justify-between mt-4 rounded-2xl my-4 mx-4 py-4">

      <TouchableOpacity className="flex items-center justify-center">
        <View className="flex items-center justify-center  w-20 h-20 bg-[#22252a] rounded-full">

          <Image
            source={require('@/assets/bmw-logo.png')}
            className="w-14 h-14 "

          />
        </View>
        <Text className="text-gray-400 text-base font-bold">BMW</Text>
      </TouchableOpacity>

      <TouchableOpacity className="flex items-center justify-center">
        <View className="flex items-center justify-center  w-20 h-20 bg-[#22252a] rounded-full">

          <Image
            source={require('@/assets/tesla-logo.png')}
            className="w-14 h-14 "

          />
        </View>
        <Text className="text-gray-400 text-base font-bold">Tesla</Text>
      </TouchableOpacity>


      <TouchableOpacity className="flex items-center justify-center">
        <View className="flex items-center justify-center  w-20 h-20 bg-[#22252a] rounded-full">

          <Image
            source={require('@/assets/volkswagen-logo.png')}
            className="w-14 h-14 "

          />
        </View>
        <Text className="text-gray-400 text-base font-bold">Volkswagen</Text>
      </TouchableOpacity>


      <TouchableOpacity className="flex items-center justify-center">
        <View className="flex items-center justify-center  w-20 h-20 bg-[#22252a] rounded-full">

          <Image
            source={require('@/assets/cadillac-logo.png')}
            className="w-14 h-14 "

          />
        </View>
        <Text className="text-gray-400 text-base font-bold">Cadillac</Text>
      </TouchableOpacity>



    </View>
  );
};

export default HeroCard;
