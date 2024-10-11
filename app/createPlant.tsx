import {
  Alert,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useState } from "react";
import { theme } from "../consts/theme";
import PlantlyImage from "../components/PlantlyImage";
import PlantlyButton from "../components/PlantlyButton";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

export default function CreatePlant() {
  const [name, setName] = useState<string>();
  const [days, setDays] = useState<string>();

  const handleSubmit = () => {
    if (!name) {
      return Alert.alert(
        "Validation error",
        "You have to name your plant friend :)"
      );
    }
    if (!days) {
      return Alert.alert(
        "Validation error",
        `How often does your ${name} need to be watered?`
      );
    }
    if (Number.isNaN(Number(days))) {
      return Alert.alert(
        "Validation error",
        `Water frequency needs to be a number :)`
      );
    }

    console.log("Adding plant", name, days);
  };
  return (
    <KeyboardAwareScrollView
      keyboardShouldPersistTaps="handled"
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
    >
      <View style={styles.centered}>
        <PlantlyImage />
      </View>
      <Text style={styles.label}>Name</Text>
      <TextInput
        value={name}
        onChangeText={setName}
        style={styles.input}
        placeholder="i.e Casper the Cactus"
        autoCapitalize="words"
      />
      <Text style={styles.label}>Watering Frequency (every x days)</Text>
      <TextInput
        value={days}
        onChangeText={setDays}
        style={styles.input}
        placeholder="i.e 6, 7, 8"
        keyboardType="number-pad"
      />
      <PlantlyButton title="Add plant" onPress={handleSubmit} />
    </KeyboardAwareScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    paddingTop: 24,
    paddingHorizontal: 24,
    paddingBottom: 100,
  },
  input: {
    borderWidth: 2,
    borderColor: theme.colorLightGrey,
    padding: 12,
    borderRadius: 6,
    marginBottom: 24,
    fontSize: 18,
  },
  label: {
    fontSize: 18,
    marginBottom: 8,
  },
  centered: {
    alignItems: "center",
  },
});
