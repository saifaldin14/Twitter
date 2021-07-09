import React from "react";
import { View, Text, Image } from "react-native";
import { TweetType } from "../../../types";
import { Entypo } from "@expo/vector-icons";
import styles from "./styles";

export type MainContainerProps = {
  tweet: TweetType;
};

const MainContainer = ({ tweet }: MainContainerProps) => (
  <View>
    <View style={styles.headerContainer}>
      <View style={styles.headerNames}>
        <Text style={styles.name}>{tweet.user.name}</Text>
        <Text style={styles.username}>@{tweet.user.username}</Text>
        <Text style={styles.createdAt}>15s</Text>
      </View>
      <Entypo
        style={styles.moreIcon}
        name={"chevron-down"}
        size={16}
        color={"grey"}
      />
    </View>
    <View>
      <Text>{tweet.content}</Text>
      {!tweet.image && <Image source={{ uri: tweet.image }} />}
    </View>
    {/*  Tweet Footer  */}
  </View>
);

export default MainContainer;
