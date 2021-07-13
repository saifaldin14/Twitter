import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import { StyleSheet, TouchableOpacity, Text } from "react-native";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function NewTweetScreen() {
  const onPostTweet = () => {
    console.log("Hi");
  };
  return (
    <View style={styles.container}>
      <View>
        <AntDesign name={"close"} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: Colors.light.tint,
    borderRadius: 30,
  },
  buttonText: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    color: "white",
    fontWeight: "bold",
    fontSize: 16,
  },
});
