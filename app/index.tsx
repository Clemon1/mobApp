import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const index = () => {
  return (
    <View className='flex-1 bg-[#2656f6] p-5'>
      <Text className='text-3xl text-center text-white'>Index</Text>
      <Text className='text-white text-3xl'> Clemon Ezeh</Text>
      <Link href={"/(tabs)/home"}>
        <Text className='text-white text-2xl'>Home</Text>
      </Link>
    </View>
  );
};

export default index;
