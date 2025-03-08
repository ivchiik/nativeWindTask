import { Pressable, Text, View } from "react-native";
import { AntDesign, Feather } from "@expo/vector-icons";
import { BottomSheetView } from "@gorhom/bottom-sheet";

interface ChooseGenderProps {
  onPress: (item: string) => void;
  onClose: () => void;
  selectedGender: string | undefined;
}

export const ChooseGender = (props: ChooseGenderProps) => {
  const { onPress, onClose, selectedGender } = props;

  return (
    <BottomSheetView className="flex-1 px-4 py-1 gap-2 mb-1 bg-white dark:bg-zinc-900">
      <BottomSheetView className="flex flex-row justify-between items-center">
        <Text className="text-2xl font-bold mb-2 text-black dark:text-white">
          Select Sex
        </Text>
        <Pressable
          className="bg-gray dark:bg-grayText rounded-3xl p-3"
          onPress={onClose}
          hitSlop={5}
        >
          <AntDesign name="close" size={20} color="black" />
        </Pressable>
      </BottomSheetView>
      {["Male", "Female"].map((item) => (
        <View key={item}>
          <View className="h-[1px] bg-gray dark:bg-grayText my-2" />

          <Pressable
            className="flex flex-row justify-between items-center py-2"
            onPress={() => onPress(item)}
          >
            <Text className="text-lg font-semibold text-black dark:text-white">
              {item}
            </Text>

            <View
              className={`w-6 h-6 rounded-lg border flex items-center justify-center ${
                selectedGender === item ? "bg-success" : "border-gray"
              }`}
            >
              {selectedGender === item && (
                <Feather name="check" size={16} color="white" />
              )}
            </View>
          </Pressable>
        </View>
      ))}
    </BottomSheetView>
  );
};
