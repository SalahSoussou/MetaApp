import {
  Image,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from "react-native";
import FlatLs from "./components/FlatLs";
import Footer from "./components/Footer";
import FeedbackForm from "./components/Form";
import Haeder from "./components/Haeder";
import ScrollCom from "./components/ScrollCom";
import SictionLs from "./components/SictionLs";

export default function App() {
  const { width: w, height, fontScale } = useWindowDimensions();
  return (
    <>
      <View style={styles.container}>
        <Haeder />
        <View style={styles.bod}>
          <Text style={styles.textStyl}>
            {Math.round(w)},{Math.round(height)},{Math.round(fontScale)}
          </Text>
          {/* <Image source={require("./assets/favicon.png")} /> */}
          <TextInput placeholder="password" />
        </View>
        <ScrollCom />
        <FlatLs />
        <FeedbackForm />
        <SictionLs />
        <View>
          <Footer />
        </View>
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
    flex: 0.25,
    padding: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "green",
  },
  textStyl: {
    padding: 5,
    backgroundColor: "#fff",
    borderRadius: 5,
    fontSize: 15,
  },
});
