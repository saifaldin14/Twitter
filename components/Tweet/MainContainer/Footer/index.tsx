import React from "react";
import { View, Text } from "react-native";
import { TweetType } from "../../../../types";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

export type FooterContainerProps = {
  tweet: TweetType;
};

const Footer = ({ tweet }: FooterContainerProps) => (
  <View style={styles.container}>
    <Text>Footer</Text>
  </View>
);

export default Footer;
