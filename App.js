import { StyleSheet, Text, TextInput, View } from "react-native";
import FlatLs from "./components/FlatLs";
import Footer from "./components/Footer";
import Haeder from "./components/Haeder";
import ScrollCom from "./components/ScrollCom";
import SictionLs from "./components/SictionLs";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Haeder />
        <View style={styles.bod}>
          <Text style={styles.textStyl}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            sequi perferendis ,
          </Text>
          <TextInput placeholder="password" />
        </View>
        <ScrollCom />
        <FlatLs />
        <SictionLs />
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
  bod: {
    flex: 0.2,
    padding: 10,
    backgroundColor: "green",
  },
  textStyl: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 15,
  },
});
