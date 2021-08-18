import React, { Component } from "react";
import { View, Text, Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import Home from "./Home";

const Tab = createBottomTabNavigator();

export default class BottomTab extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName={"Home"}
          swipeEnabled={true}
          screenOptions={{ headerShown: false, tabBarShowLabel: false }}
        >
          <Tab.Screen
            name="Home"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/home.png")}
                  style={{ width: 22, height: 22 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Search"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/search.png")}
                  style={{ width: 21, height: 21 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Reels"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/reels.png")}
                  style={{ width: 21, height: 21 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Heart"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/heart.png")}
                  style={{ width: 24, height: 21 }}
                />
              ),
            }}
          />
          <Tab.Screen
            name="Profile"
            component={Home}
            options={{
              tabBarIcon: ({ focused }) => (
                <Image
                  source={require("./assets/profile.png")}
                  style={{ width: 24, height: 24, borderRadius: 12 }}
                />
              ),
            }}
          />
        </Tab.Navigator>
      </NavigationContainer>
    );
  }
}
