import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
const myText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. dolorem, suscipit accusantium reiciendis porro!Lorem,";

let lest = myText.split(" ");
let itims = lest.map((e, i) => (
  <Text
    key={i}
    style={{
      fontSize: 25,
      textAlign: "center",
      backgroundColor: "hsl(" + Math.random() * 360 + ", 80%,50%)",
      marginBottom: 10,
      paddingVertical: 10,
      borderRadius: 8,
    }}
  >
    {e} : {i}
  </Text>
));
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
    backgroundColor: "#495E57",
    paddingHorizontal: 40,
  },
});
