import BottomIcon from "@/components/BottomIcon";
import { Tabs } from "expo-router";
import Entypo from "@expo/vector-icons/Entypo";
import Octicons from "@expo/vector-icons/Octicons";
import Ionicons from "@expo/vector-icons/Ionicons";
import Feather from "@expo/vector-icons/Feather";
import AntDesign from "@expo/vector-icons/AntDesign";
import { View } from "react-native";
const TabLayout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          justifyContent: "center",
          alignItems: "center",
          height: 55,
        },
      }}>
      <Tabs.Screen
        name='home'
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <BottomIcon focused={focused} size={size} color={color}>
              <Entypo
                name='home'
                size={25}
                color={focused ? "#2356f6" : "#151515"}
              />
            </BottomIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='chats'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BottomIcon focused={focused} size={size} color={color}>
              <>
                {focused ? (
                  <Ionicons name='chatbubbles' size={25} color='#2356f6' />
                ) : (
                  <Ionicons
                    name='chatbubbles-outline'
                    size={25}
                    color='#151515'
                  />
                )}
              </>
            </BottomIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='create'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BottomIcon focused={focused} size={size} color={color}>
              <View
                style={{
                  width: 55,
                  alignItems: "center",
                  flexDirection: "row",
                  borderRadius: 8,
                  height: 30,
                  alignSelf: "center",
                  backgroundColor: focused ? "#2356f6" : "#151515",
                  justifyContent: "center",
                  alignContent: "center",
                }}>
                <AntDesign name='plus' size={20} color={"#ffffff"} />
              </View>
            </BottomIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='status'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BottomIcon focused={focused} size={size} color={color}>
              <Feather
                name='radio'
                size={25}
                color={focused ? "#2356f6" : "#151515"}
              />
            </BottomIcon>
          ),
        }}
      />
      <Tabs.Screen
        name='settings'
        options={{
          tabBarIcon: ({ focused, color, size }) => (
            <BottomIcon focused={focused} size={size} color={color}>
              <>
                {focused ? (
                  <Octicons name='person-fill' size={25} color={"#2356f6"} />
                ) : (
                  <Octicons name='person' size={25} color={"#151515"} />
                )}
              </>
            </BottomIcon>
          ),
        }}
      />
    </Tabs>
  );
};

export default TabLayout;
