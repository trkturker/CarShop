import { View, Text } from 'react-native'
import React from 'react'
import { useCars } from '../hooks/useCars';
import { FlatList } from 'react-native';


const CarsContainer = () => {
  const { data } = useCars()
  return (
    <View>

      <FlatList
        data={data}
        renderItem={({ item }) => (
          <View className='grid grid-cols-2 gap-2'>
            <Text>{item.name}</Text>
          </View>
        )}
      />

    </View>
  )
}

export default CarsContainer