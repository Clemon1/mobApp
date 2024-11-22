import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const settings = () => {
  return (
    <View>
      <Text>settings</Text>
      <Link href={"/"}>Back to home</Link>
    </View>
  );
};

export default settings;
