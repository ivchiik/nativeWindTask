import { View } from "react-native";
import { ThemedText } from "./ThemedText";

export const Header = () => {
  return (
    <View className="flex-row items-center justify-between mb-10">
      <ThemedText className="text-4xl font-bold" type="title">
        Profile Info
      </ThemedText>
    </View>
  );
};
