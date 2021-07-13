import React from "react";
import { View, FlatList } from "react-native";
import tweets from "../../constants/data/tweets";
import Tweet from "../Tweet";

const Feed = () => (
  <FlatList
    data={tweets}
    renderItem={({ item }) => <Tweet tweet={item} />}
    keyExtractor={(item) => item.id}
  />
);

export default Feed;
