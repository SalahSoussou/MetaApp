import { Text, StyleSheet, View } from "react-native";
import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <View style={styles.footer}>
        <Text style={styles.text}>Footer</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#F4CE14",
  },
  text: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    padding: 15,
  },
});
