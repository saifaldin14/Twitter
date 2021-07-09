import React from "react";
import { View } from "react-native";
import { TweetType } from "../../types";
import LeftContainer from "./LeftContainer";
import MainContainer from "./MainContainer";

export type TweetProps = {
  tweet: TweetType;
};

const Tweet = (props: TweetProps) => (
  <View>
    <LeftContainer />
    <MainContainer />
  </View>
);

export default Tweet;