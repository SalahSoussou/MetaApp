import { StyleSheet, Text, View } from "react-native";
import FlatLs from "./components/FlatLs";
import Footer from "./components/Footer";
import Haeder from "./components/Haeder";
import ScrollCom from "./components/ScrollCom";

export default function App() {
  return (
    <>
      <View style={styles.container}>
        <Haeder />
        <View style={styles.bod}>
          <Text style={styles.textStyl}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Debitis
            sequi perferendis , doloribus possimus voluptatibus, doloremque
            explicabo ratione nesciunt suscipit ex aut illo iste molestias,
          </Text>
        </View>
        <ScrollCom />
        <FlatLs />
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
    backgroundColor: "green",
    padding: 20,
  },
  textStyl: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 15,
  },
});
