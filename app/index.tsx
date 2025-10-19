import HeroCard from '@/components/HeroCard';
import SearchInput from '@/components/SearchInput';
import CarsCard from '@/components/CarsCard';
import UserInfo from '@/components/UserInfo';
import React from 'react';
import {View} from 'react-native';


const Index = () => {
  return (
    <View className="p-4 flex flex-1 bg-[#f3f5f7]">
      <UserInfo />
      <SearchInput />
      <HeroCard />
      <CarsCard />
    </View>
  );
};

export default Index;
