import { StyleSheet } from "react-native";
import Colors from "../../constants/Colors";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    margin: 5,
  },
  image: {
    backgroundColor: "#ffffff",
    padding: 5,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: Colors.light.tint,
  },
  username: {
    marginTop: 5,
    fontSize: 15,
    fontWeight: "bold",
    color: Colors.light.text,
  },
});

export default styles;
