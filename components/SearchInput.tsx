import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import React from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';


const SearchInput = () => {
  return (
    <View className="flex-row items-center gap-2 rounded-full bg-white pl-4 mx-4">
        <MaterialIcons name="search" size={24} color="rgb(156 163 175)" />
      <TextInput placeholder="Search your car" className='text-gray-500' />
      <TouchableOpacity className='ml-auto'>
        <Fontisto name="equalizer" className=' rotate-90 bg-[#22252a] p-4 rounded-full' size={20} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
