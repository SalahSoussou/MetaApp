import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Haeder from "./components/Haeder";

export default function App() {
  return (
    <View style={styles.container}>
      <Haeder />
      <View style={styles.header}>
        <Text style={styles.text}>Hello, World!</Text>
      </View>
      <View style={styles.body}>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit.</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "pink",
    borderRadius: 5,
    padding: 20,
  },
  text: {
    fontWeight: "bold",
  },
  body: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 5,
  },
});
