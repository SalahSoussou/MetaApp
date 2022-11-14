import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
const myText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!";
let lest = myText.split(" ");
let itims = lest.map((e, i) => (
  <Text
    style={{
      fontSize: 25,
      textAlign: "center",
      backgroundColor: "hsl(" + Math.random() * 250 + ", 80%,50%)",
      marginBottom: 10,
      paddingVertical: 10,
      borderRadius: 8,
    }}
    key={i}
  >
    {e} : {i + 1}
  </Text>
));
const ScrollCom = () => {
  return (
    <View style={{ flex: 0.7 }}>
      <Text style={{ fontSize: 40, textAlign: "center" }}>Menu</Text>
      <ScrollView style={styles.scrollStyle}>{itims}</ScrollView>
    </View>
  );
};

export default ScrollCom;

const styles = StyleSheet.create({
  scrollStyle: {
    backgroundColor: "#495E57",
    paddingHorizontal: 40,
  },
});
