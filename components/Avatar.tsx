import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import React from "react";

const Avatar = ({ url, name }: { url: string; name: string }) => {
  return (
    <View style={style.statusHeader}>
      <TouchableOpacity
        style={{
          width: 75,
          maxHeight: 75,
          padding: 4,
          borderRadius: 50,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#2356f6",
        }}>
        <Image
          source={{ uri: url }}
          style={{
            width: "100%",
            height: "100%",
            borderRadius: 50,
            borderColor: "purple",
            objectFit: "cover",
          }}
        />
      </TouchableOpacity>
      <Text style={style.statusName}>{name}</Text>
    </View>
  );
};

const style = StyleSheet.create({
  statusHeader: {
    flexDirection: "column",
    gap: 2,
    marginLeft: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  statusName: {
    fontSize: 14,
    fontWeight: 500,
    fontFamily: "Poppins_500Medium",
    color: "#151515",
  },
});
export default Avatar;
