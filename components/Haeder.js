import { StyleSheet, Text, View } from "react-native";
import React from "react";

const Haeder = () => {
  return (
    <View style={styles.header}>
      <Text>Haeder</Text>
    </View>
  );
};

export default Haeder;

const styles = StyleSheet.create({
  header: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 20,
  },
});
