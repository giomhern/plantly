import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { theme } from "../consts/theme";
import { PlantType } from "../store/plantsStore";
import PlantlyImage from "./PlantlyImage";
import { Link } from "expo-router";
import { Pressable } from "react-native";

const PlantlyCard = ({ plant }: { plant: PlantType }) => {
  return (
    <Link href={`plants/${plant.id}`} asChild>
      <Pressable style={styles.plantlyCard}>
        <PlantlyImage size={100} imageUri={plant.imageUri} />
        <View style={styles.details}>
          <Text numberOfLines={1} style={styles.plantName}>
            {plant.name}
          </Text>
          <Text style={styles.subtitle}>
            Water every {plant.wateringFrequencyDays} days
          </Text>
        </View>
      </Pressable>
    </Link>
  );
};

export default PlantlyCard;

const styles = StyleSheet.create({
  plantlyCard: {
    flexDirection: "row",
    shadowColor: theme.colorBlack,
    backgroundColor: theme.colorWhite,
    borderRadius: 6,
    padding: 12,
    marginBottom: 12,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  details: {
    padding: 14,
    justifyContent: "center",
  },
  plantName: {
    fontSize: 18,
    marginBottom: 4,
  },
  subtitle: {
    color: theme.colorGrey,
  },
});
