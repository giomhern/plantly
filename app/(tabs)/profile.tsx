import { StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import { theme } from "../../consts/theme";
import { useUserStore } from "../../store/userStore";
import PlantlyButton from "../../components/PlantlyButton";

const Profile = () => {
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);
  return (
    <View style={styles.container}>
      <PlantlyButton title="Back to onboarding" onPress={toggleHasOnboarded} />
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colorWhite,
  },
  text: {
    fontSize: 24,
  },
});
