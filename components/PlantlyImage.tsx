import {
  Image,
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

const PlantlyImage = () => {
  const { width } = useWindowDimensions();
  const imageSize = Math.min(width / 1.5, 400);
  return (
    <Image
      source={require("../assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};

export default PlantlyImage;

const styles = StyleSheet.create({});
