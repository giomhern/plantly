import {
  Image,
  View,
  Text,
  useWindowDimensions,
  StyleSheet,
} from "react-native";

type Props = {
  size?: number;
  imageUri?: string;
};

const PlantlyImage = ({ size, imageUri }: Props) => {
  const { width } = useWindowDimensions();
  const imageSize = size || Math.min(width / 1.5, 400);
  return (
    <Image
      source={imageUri ? { uri: imageUri } : require("../assets/plantly.png")}
      style={{ width: imageSize, height: imageSize }}
    />
  );
};

export default PlantlyImage;

