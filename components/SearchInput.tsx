import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import React from 'react';
import { TextInput, View } from 'react-native';


const SearchInput = () => {
  return (
    <View className="flex-row items-center gap-2 rounded-full bg-white pl-4 mx-4">
      <MaterialIcons name="search" size={24} color="rgb(156 163 175)" />
      <TextInput placeholder="Search your car" className='text-gray-500' />
      <Fontisto name="equalizer"  className='ml-auto bg-[#22252a] p-4 rounded-full' size={20} color="#fff" />
    </View>
  );
};

export default SearchInput;
