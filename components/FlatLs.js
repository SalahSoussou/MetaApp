import { FlatList, StyleSheet, Text, View } from "react-native";
import React from "react";
const flatText =
  "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem,Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nulla architecto blanditiis cum dolor rerum voluptatum dolores harum fugit inventore tenetur aspernatur in asperiores provident esse dolorem, suscipit accusantium reiciendis porro!Lorem,";

let lest = flatText.split(" ");
let arr = [];

lest.forEach((e, i) => arr.push({ name: e, id: i + 1 }));
const Item = ({ name }) => {
  return (
    <View>
      <Text
        style={{
          fontSize: 25,
          textAlign: "center",
          backgroundColor: "hsl(" + Math.random() * 360 + ", 80%,50%)",
          marginBottom: 10,
          paddingVertical: 10,
          borderRadius: 8,
        }}
      >
        {name}
      </Text>
    </View>
  );
};
const Spar = () => (
  <View style={{ borderBottomWidth: 2, borderColor: "black" }} />
);
const FlatLs = () => {
  const renderItem = ({ item }) => <Item name={item.name} />;
  return (
    <View style={{ flex: 0.4 }}>
      <FlatList
        data={arr}
        renderItem={renderItem}
        keyExtractor={(e) => e.id}
        ItemSeparatorComponent={Spar}
      />
    </View>
  );
};

export default FlatLs;

const styles = StyleSheet.create({});
