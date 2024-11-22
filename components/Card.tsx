import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Entypo from "@expo/vector-icons/Entypo";
import React from "react";
import { Image } from "react-native";

const Card = () => {
  return (
    <View style={style.cardBody}>
      <View style={style.cardHeader}>
        <View className='h-full flex-row gap-2 items-center justify-start'>
          <Image
            style={style.cardImage2}
            source={{
              uri: "https://pixabay.com/get/g8cfd1e6096d3cf336491923b01ac20090c0144d5b99150cca2f6374148bb82333de5075af5638e7919a27b6e2634aa90_640.jpg",
            }}
          />
          <View
            style={{
              gap: 1,
              justifyContent: "center",
            }}>
            <Text style={style.userTitle}>Dawn</Text>
            <Text style={style.userLocation}>San Francisco</Text>
          </View>
        </View>
        <TouchableOpacity style={style.btnOptions}>
          <Entypo name='dots-three-horizontal' size={22} color='#151515' />
        </TouchableOpacity>
      </View>
      <Image
        style={style.cardImage}
        source={{
          uri: "https://pixabay.com/get/g8cfd1e6096d3cf336491923b01ac20090c0144d5b99150cca2f6374148bb82333de5075af5638e7919a27b6e2634aa90_640.jpg",
        }}
      />

      <View style={style.cardFooter}></View>
    </View>
  );
};
const style = StyleSheet.create({
  cardBody: {
    width: "100%",
    height: "70%",
    backgroundColor: "#ffffff",
    borderRadius: 12,
  },
  cardHeader: {
    width: "100%",
    position: "relative",
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    gap: 10,
    backgroundColor: "#ffffff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  cardImage: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  cardImage2: {
    width: 50,
    height: 50,
    borderRadius: 50,
    objectFit: "cover",
  },
  userTitle: {
    fontSize: 15,
    fontWeight: "700",
    color: "#1515151",
    fontFamily: "Poppins_700Bold",
  },
  userLocation: {
    fontSize: 12.5,
    fontWeight: 400,
    color: "#1515151",
    fontFamily: "Poppins_400Regular",
  },
  btnOptions: {
    alignSelf: "center",
  },
  cardFooter: {
    width: "100%",
    paddingVertical: 30,
    paddingHorizontal: 10,
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    backgroundColor: "#ffffff",
  },
});

export default Card;
