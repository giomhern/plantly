import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import * as FileSystem from "expo-file-system";

export type PlantType = {
  id: string;
  name: string;
  imageUri?: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (
    name: string,
    wateringFrequencyDays: number,
    imageUri?: string
  ) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantsStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: async (
        name: string,
        wateringFrequencyDays: number,
        imageUri?: string
      ) => {
        const savedImageUri =
          FileSystem.documentDirectory +
          `${new Date().getTime()}-${imageUri?.split("/").slice(-1)[0]}`;

        if (imageUri) {
          await FileSystem.copyAsync({
            from: imageUri,
            to: savedImageUri,
          });
        }

        return set((state) => {
          return {
            ...state,
            id: String(state.nextId),
            name,
            wateringFrequencyDays,
            imageUri: imageUri ? savedImageUri : undefined,
          };
        });
      },
      removePlant: (plantId: string) => {
        return set((state) => ({
          ...state,
          plants: state.plants.filter((plant) => plant.id !== plantId),
        }));
      },
      waterPlant: (plantId: string) => {
        return set((state) => ({
          ...state,
          plants: state.plants.map((plant) => {
            if (plant.id === plantId) {
              return {
                ...plant,
                lastWateredAtTimestamp: Date.now(),
              };
            }
            return plant;
          }),
        }));
      },
    }),
    {
      name: "plantly-plants, storage",
      storage: createJSONStorage(() => AsyncStorage),
    }
  )
);
