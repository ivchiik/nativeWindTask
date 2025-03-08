import React from "react";
import { View, Text, Pressable, useColorScheme } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { colors } from "@/theme/colors";

interface SelectProps {
  label?: string;
  error?: boolean;
  disabled?: boolean;
  selected?: string;
  onPress: () => void;
}

const Select: React.FC<SelectProps> = ({
  label = "Select",
  error = false,
  disabled = false,
  selected = "",
  onPress,
}) => {33
  const theme = useColorScheme();
  const themeColors = theme === "dark" ? colors.dark : colors.light;

  return (
    <View className="mb-4">
      <Pressable
        className={`px-4 py-4 rounded-lg flex-row justify-between items-center ${
          disabled
            ? "text-grayText"
            : error
            ? "border-error bg-error/20"
            : selected
            ? "border border-primary bg-white"
            : "border border-gray bg-gray"
        }`}
        disabled={disabled}
        onPress={onPress}
      >
        <Text
          className={`text-grayText ${
            selected ? "text-black font-semibold" : ""
          } ${error ? "text-error" : ""} ${disabled ? "text-grayText" : ""}`}
        >
          {selected ? selected : label}
        </Text>

        <AntDesign
          name="caretdown"
          size={10}
          color={
            error
              ? themeColors.error.errorBase
              : disabled
              ? themeColors.textIcons.disabled
              : themeColors.textIcons.secondary
          }
        />
      </Pressable>
    </View>
  );
};

export default Select;
