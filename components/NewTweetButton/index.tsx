import { MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { TouchableOpacity } from "react-native";
import styles from "./styles";

const NewTweetButton = () => (
  <TouchableOpacity style={styles.button}>
    <MaterialCommunityIcons name={"feather"} size={30} color={"white"} />
  </TouchableOpacity>
);

export default NewTweetButton;
