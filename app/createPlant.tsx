import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../consts/theme";

export default function CreatePlant() {
  return (
    <View style={styles.container}>
      <Text>New plant</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
    justifyContent: "center",
    alignItems: "center",
  },
});
