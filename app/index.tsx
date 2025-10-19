// rnfe

import HeroCard from '@/components/HeroCard';
import PricesContainer from '@/components/PricesContainer';
import SearchInput from '@/components/SearchInput';
import ServicesContainer from '@/components/ServicesContainer';
import UserInfo from '@/components/UserInfo';
import React from 'react';
import { ScrollView, View} from 'react-native';


const Index = () => {
  return (
    <View className="p-4 bg-[#f3f5f7]">
      <UserInfo />
      <SearchInput />
      <HeroCard />
      <ServicesContainer />
    </View>
  );
};

export default Index;
