import { View, Text, FlatList } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import React from "react";
import { Link } from "expo-router";
import Avatar from "@/components/Avatar";
import Card from "@/components/Card";

const home = () => {
  const data = [
    {
      id: 1,
      name: "Jennifer",
      image:
        "https://pixabay.com/get/g7f123728754e932c4225bd6d60eea7b97c46d4da5f5250826ae25fa9911de889e9cb7cf1ce32472e364f34a840cea39ca02c9886578591152ede583714e9dcea_1280.jpg",
    },
    {
      id: 2,
      name: "Kath",
      image:
        "https://pixabay.com/get/ga9db789222ea7c41ca06daef40d1ae2d9ec858ac4fa5faf2e5fed322604947a412e9bbd7f892420e625e53b2eceef0b5_640.jpg",
    },
    {
      id: 3,
      name: "Trent",
      image:
        "https://pixabay.com/get/gc2cff6ba0c7ca271e51af96c20cbdb368b7bfe70ce638cddb8aa00b6ff43f4a209eb7cab6bdad56d6c1b9fcfc99f2c87e0c79dd751a95519807292cb7c8ef3c4_1280.jpg",
    },
    {
      id: 4,
      name: "Jack",
      image:
        "https://pixabay.com/get/gb8983fab7cfaa319da91a34b471d7a57d98797d385ec3276f61e2cfda27b95885f35b0c498417ebe136670b359be88af_640.jpg",
    },
    {
      id: 5,
      name: "Dawn",
      image:
        "https://pixabay.com/get/g823f18c6961c1d743e320dafc5e714fda11c793dcd623bee721b8a41bcdd0144a468e88ae0aca31ed0cdb6b0e54c4758_640.jpg",
    },
    {
      id: 6,
      name: "Melissa",
      image:
        "https://pixabay.com/get/gaba3d440953811f31234ada1052d50b296e4e7e5904631cf1d0b546760887eb52a87ac030395a9a286a1dc72c75cda97_640.jpg",
    },
    {
      id: 7,
      name: "Michelle",
      image:
        "https://pixabay.com/get/g92d0b3a095c6f017271d7e6d1b608e5cea385e66a6bcea500397ade16fd07d1684ec58554f6f6c0d2f666201d524ace4_640.jpg",
    },
  ];
  return (
    <SafeAreaProvider>
      <SafeAreaView className='flex-1 bg-[#f0eff4] gap-3'>
        <View className='flex-row py-4 px-2 bg-[#ffffff]'>
          <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Avatar url={item?.image} name={item.name} />
            )}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
        <View className='flex-1 px-3'>
          <Card />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
};

export default home;
