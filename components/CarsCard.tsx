import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import CarsContainer from '@/components/CarsContainer';

const CarsCard = () => {
  return (
    // <ScrollView className="mt-4" contentContainerClassName="gap-4">
    <View className='mt-4 flex-1'>

      <View className=" gap-2 rounded-2xl bg-white px-4 py-2 flex-1">

        <View className="flex-row justify-between">
          <Text className='text-2xl font-bold mx-2 my-4'>Popular Car</Text>
            <Link href="/" className='text-base text-gray-300 mx-2 my-4'>View All</Link>
        </View>

        <View className='flex-1' >
          <CarsContainer />
        </View>

      </View>

    </View>
    // </ScrollView>
  );
};

export default CarsCard;
