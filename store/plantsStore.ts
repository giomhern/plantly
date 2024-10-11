import AsyncStorage from "@react-native-async-storage/async-storage";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type PlantType = {
  id: string;
  name: string;
  wateringFrequencyDays: number;
  lastWateredAtTimestamp?: number;
};

type PlantsState = {
  nextId: number;
  plants: PlantType[];
  addPlant: (name: string, wateringFrequencyDays: number) => void;
  removePlant: (plantId: string) => void;
  waterPlant: (plantId: string) => void;
};

export const usePlantsStore = create(
  persist<PlantsState>(
    (set) => ({
      plants: [],
      nextId: 1,
      addPlant: (name: string, wateringFrequencyDays: number) => {
        set((state) => ({
          ...state,
          nextId: state.nextId + 1,
          plants: [
            {
              id: String(state.nextId),
              name,
              wateringFrequencyDays,
            },
          ],
        }));
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
