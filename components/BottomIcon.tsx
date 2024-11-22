import { View } from "react-native";
import React from "react";

type IconProps = {
  focused: boolean;
  color: string;
  size: number;
  children: React.ReactNode;
};
const BottomIcon = ({ focused, color, size, children }: IconProps) => {
  return (
    <View
      style={{
        width: "100%",
        alignSelf: "center",
        justifyContent: "center",
        position: "relative",
      }}>
      {children}
    </View>
  );
};

export default BottomIcon;
