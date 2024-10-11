import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../consts/theme";

type Props = {
  title: string;
  onPress: () => void;
};

const PlantlyButton = ({ title, onPress }: Props) => {
  return (
    <Pressable onPress={onPress} style={state => {
        if(state.pressed){
            return [styles.button, styles.buttonPressed]
        } 
        return styles.button
    }}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

export default PlantlyButton;

const styles = StyleSheet.create({
  text: {
    color: theme.colorWhite,
    fontSize: 18,
    fontWeight: "600",
  },
  button: {
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 6,
    backgroundColor: theme.colorGreen,
  },
  buttonPressed: {
    backgroundColor: theme.colorLeafyGreen
  }
});
