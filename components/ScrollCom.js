import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
const myText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!";
let lest = myText.split(" ");
let itims = lest.map((e) => <Text>{e} </Text>);
const ScrollCom = () => {
  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={styles.scrollStyle}>{itims}</ScrollView>
    </View>
  );
};

export default ScrollCom;

const styles = StyleSheet.create({
  scrollStyle: {
    padding: 40,
    backgroundColor: "#495E57",
  },
});
