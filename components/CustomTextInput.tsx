import React, { useState } from "react";
import { View, TextInput, Animated } from "react-native";

interface CustomTextInputProps {
  label: string;
  value: string;
  placeholder?: string;
  onChangeText: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({
  label,
  value,
  placeholder,
  onChangeText,
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const labelPosition = new Animated.Value(value ? 1 : 0);

  const handleFocus = () => {
    setIsFocused(true);
    Animated.timing(labelPosition, {
      toValue: 1,
      duration: 200,
      useNativeDriver: false,
    }).start();
  };

  const handleBlur = () => {
    setIsFocused(false);
    if (!value) {
      Animated.timing(labelPosition, {
        toValue: 0,
        duration: 200,
        useNativeDriver: false,
      }).start();
    }
  };

  return (
    <View className="bg-gray dark:bg-grayText mb-4 px-4 py-5 rounded-lg">
      <Animated.Text
        className="absolute left-4 text-gray-500"
        style={{
          top: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [15, 3],
          }),
          fontSize: labelPosition.interpolate({
            inputRange: [0, 1],
            outputRange: [16, 12],
          }),
          color: "#818387",
        }}
      >
        {label}
      </Animated.Text>

      <TextInput
        className="text-black dark:text-white font-medium rounded-lg"
        placeholder={isFocused ? "" : placeholder}
        value={value}
        onChangeText={onChangeText}
        onFocus={handleFocus}
        onBlur={handleBlur}
        placeholderTextColor="#A0A0A0"
      />
    </View>
  );
};

export default CustomTextInput;
