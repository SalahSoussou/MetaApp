import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Footer from "./components/Footer";
import Haeder from "./components/Haeder";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Haeder />
      </View>
      <View>
        <Footer />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eee",
    paddingTop: 20,
  },
});
