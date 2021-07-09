import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  headerContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  headerNames: {
    flexDirection: "row",
  },
  name: {
    marginHorizontal: 5,
    fontWeight: "bold",
  },
  username: {
    marginHorizontal: 5,
    color: "grey",
  },
  createdAt: {
    marginHorizontal: 5,
    color: "grey",
  },
  moreIcon: {
    justifyContent: "flex-end",
  },
});

export default styles;
