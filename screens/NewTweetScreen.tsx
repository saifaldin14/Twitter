import { AntDesign } from "@expo/vector-icons";
import * as React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  SafeAreaView,
  TextInput,
} from "react-native";
import ProfilePicture from "../components/ProfilePicture";
import { View } from "../components/Themed";
import Colors from "../constants/Colors";

export default function NewTweetScreen() {
  const onPostTweet = () => {
    console.log("Hi");
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <AntDesign name={"close"} size={30} color={Colors.light.tint} />
        <TouchableOpacity style={styles.button} onPress={onPostTweet}>
          <Text style={styles.buttonText}>Tweet</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.newTweetContainer}>
        <ProfilePicture
          image={
            "https://upload.wikimedia.org/wikipedia/commons/1/19/Águila_calva.jpg"
          }
        />
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.tweetInput}
            placeholder={"Share what's on your mind"}
          />
          <TextInput
            style={styles.imageInput}
            placeholder={"Image URL optional"}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    backgroundColor: "white",
  },
  headerContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 15,
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
  newTweetContainer: {
    flexDirection: "row",
    padding: 15,
  },
  inputContainer: {
    marginLeft: 10,
  },
  tweetInput: {
    height: 100,
    maxHeight: 300,
    fontSize: 20,
  },
  imageInput: {},
});
