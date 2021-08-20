import React from "react";
import {
  Text,
  View,
  StyleSheet,
  SafeAreaView,
  Image,
  StatusBar,
  Platform,
  FlatList,
  ScrollView,
  Dimensions,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import storyData from "./storyData";

const width = Dimensions.get("window").width;

const renderPost = ({ item }) => {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <LinearGradient
            // Background Linear Gradient
            colors={["#E5236C", "#EB9A27"]}
            style={{
              width: 36,
              height: 36,
              borderRadius: 18,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <View
              style={{
                width: 34,
                height: 34,
                borderRadius: 17,
                backgroundColor: "white",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={item.profile}
                style={{ width: 30, height: 30, borderRadius: 15 }}
              />
            </View>
          </LinearGradient>
          <Text style={{ fontSize: 14, marginLeft: 10 }}>{item.name}</Text>
        </View>

        <Image
          source={require("./assets/dots.png")}
          style={{ width: 3, height: 15 }}
        />
      </View>
      <View
        style={{
          marginHorizontal: 15,
          alignItems: "center",
          paddingBottom: 10,
          justifyContent: "center",
        }}
      >
        <Image
          source={item.post}
          style={{
            width: 360,
            height: 360,
            borderRadius: 16,
          }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginHorizontal: 15,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            width: width / 4,
          }}
        >
          <Image
            source={require("./assets/heart.png")}
            style={{
              width: 23,
              height: 20,
            }}
          />
          <Image
            source={require("./assets/comment.png")}
            style={{
              width: 20,
              height: 20,
            }}
          />
          <Image
            source={require("./assets/share.png")}
            style={{
              width: 25,
              height: 20,
            }}
          />
        </View>
        <Image
          source={require("./assets/save.png")}
          style={{
            width: 17,
            height: 20,
          }}
        />
      </View>

      <View
        style={{
          marginHorizontal: 15,
          paddingVertical: 10,
        }}
      >
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
          }}
        >
          8,387 likes
        </Text>
        <Text
          style={{
            fontSize: 13,
            fontWeight: "400",
            color: "#A9A9A9",
          }}
        >
          View all 291 comments
        </Text>
        <Text
          style={{
            fontSize: 12,
            fontWeight: "400",
            color: "#A9A9A9",
          }}
        >
          10 minute ago
        </Text>
      </View>
    </View>
  );
};

export default function Home() {
  const renderStory = ({ item }) => {
    return (
      <View
        style={{
          alignItems: "center",
          padding: 5,
          marginLeft: item.name == "kuldip_badga" ? 15 : 0,
        }}
      >
        <LinearGradient
          // Background Linear Gradient
          colors={["#E5236C", "#EB9A27"]}
          style={{
            width: 70,
            height: 70,
            borderRadius: 35,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <View
            style={{
              width: 66,
              height: 66,
              borderRadius: 32,
              backgroundColor: "white",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              source={item.profile}
              style={{ width: 60, height: 60, borderRadius: 30 }}
            />
          </View>
        </LinearGradient>
        <Text
          style={{
            color: item.name == "kuldip_badga" ? "#A9A9A9" : "#292929",
            fontSize: 12,
            marginTop: 5,
          }}
        >
          {item.name == "kuldip_badga" ? "Your Story" : item.name}
        </Text>
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          ...styles.mainWrapper,
          marginTop:
            Platform.OS === "android" ? StatusBar.currentHeight + 5 : 0,
          paddingVertical: 5,
        }}
      >
       <Image
          source={require("./assets/logo.png")}
          style={{ width: 110, height: 31 }}
        />

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <View style={{ paddingHorizontal: 10 }}>
            <Image
              source={require("./assets/add.png")}
              style={{ width: 20, height: 20 }}
            />
          </View>
          <View style={{ paddingHorizontal: 10 }}>
            <Image
              source={require("./assets/dm.png")}
              style={{ width: 19, height: 20 }}
            />
          </View>
        </View>
      </View>

      <ScrollView>
        <View
          style={{
            borderBottomWidth: 0.2,
            borderColor: "#c7c7c7",
            paddingVertical: 5,
          }}
        >
          <FlatList
            data={storyData}
            renderItem={renderStory}
            keyExtractor={(item, index) => index.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        <View>
          <FlatList
            data={storyData}
            renderItem={renderPost}
            keyExtractor={(item, index) => index.toString()}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  mainWrapper: {
    marginHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
