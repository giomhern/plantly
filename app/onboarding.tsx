import { StyleSheet, Text, View, Button } from "react-native";
import { theme } from "../consts/theme";
import React from "react";
import { useUserStore } from "../store/userStore";
import { useRouter } from "expo-router";

const Onboarding = () => {
  const router = useRouter();
  const toggleHasOnboarded = useUserStore((state) => state.toggleHasOnboarded);

  const handlePress = () => {
    toggleHasOnboarded();
    router.replace("/")
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Onboarding</Text>
      <Button title="Let me in" onPress={handlePress} />
    </View>
  );
};

export default Onboarding;

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
