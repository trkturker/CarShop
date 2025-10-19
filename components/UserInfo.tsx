import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import Fontisto from '@expo/vector-icons/Fontisto';
import React from 'react';
import { Image, TouchableOpacity, TextInput, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';


const UserInfo = () => {
  return (
    <SafeAreaView>
      <View className="flex-row items-center gap-2 rounded-full m-4">
        <TouchableOpacity>
          <Image
            source={require('@/assets/user.jpeg')}
            className="w-16 h-16 rounded-full"
          />
        </TouchableOpacity>
        <View>
          <Text className='text-gray-600'>Welcome 🖐</Text>
          <Text className='text-xl font-bold'>Shahinur Rahman</Text>
        </View>
        <TouchableOpacity className='ml-auto flex justify-center items-center bg-white  w-14 h-14 rounded-full'>
          <Fontisto name="bell" size={22} color="black" />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default UserInfo;
