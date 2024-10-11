import { StyleSheet, Text, View, FlatList } from "react-native";
import { theme } from "../../consts/theme";
import { useRouter } from "expo-router";
import { usePlantsStore } from "../../store/plantsStore";
import PlantlyCard from "../../components/PlantlyCard";
import PlantlyButton from "../../components/PlantlyButton";

export default function Page() {
  const router = useRouter();
  const plants = usePlantsStore((state) => state.plants);

  return (
    <FlatList
      style={styles.container}
      contentContainerStyle={styles.contentContainer}
      data={plants}
      renderItem={({ item }) => <PlantlyCard plant={item} />}
      ListEmptyComponent={
        <PlantlyButton
          title="Add your first plant"
          onPress={() => {
            router.navigate("/createPlant");
          }}
        />
      }
    />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.colorWhite,
  },
  contentContainer: {
    padding: 12,
  },
});
