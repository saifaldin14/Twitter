import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const NewTweetButton = () => {
  const onPress = () => {
    console.log("Hi");
  };

  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.button}
      onPress={onPress}
    >
      <MaterialCommunityIcons name={"feather"} size={30} color="white" />
    </TouchableOpacity>
  );
};

export default NewTweetButton;
