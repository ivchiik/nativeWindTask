import { SafeAreaView } from "react-native-safe-area-context";
import { useMemo, useRef, useState } from "react";

import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { BottomSheetModalCustom } from "@/components/BottomSheetCustom";
import Select from "@/components/Select";
import { Header } from "@/components/Header";
import CustomTextInput from "@/components/CustomTextInput";
import { ChooseGender } from "@/components/ChooseGender";

export default function HomeScreen() {
  const [selected, setSelected] = useState<string | undefined>("");
  const [error, setError] = useState(false);
  const [fullName, setFullName] = useState("");
  const [position, setPosition] = useState("");

  const bottomSheetRef = useRef<BottomSheetModal>(null);
  const snapPoints = useMemo(() => ["35%"], []);

  const handleSelectPress = () => {
    bottomSheetRef.current?.present();
  };

  const handleClose = () => {
    bottomSheetRef.current?.close();
  };

  const handleGender = (item: string) => {
    setSelected(item);
    bottomSheetRef.current?.close();
  };

  return (
    <SafeAreaView className="flex-1 p-4 bg-white dark:bg-zinc-900">
      <Header />

      <CustomTextInput
        label="Full name"
        value={fullName}
        onChangeText={setFullName}
      />
      <CustomTextInput
        label="Position"
        value={position}
        onChangeText={setPosition}
      />
      <Select onPress={handleSelectPress} error={error} selected={selected} />

      <BottomSheetModalCustom
        ref={bottomSheetRef}
        index={1}
        snapPoints={snapPoints}
      >
        <ChooseGender
          onPress={handleGender}
          onClose={handleClose}
          selectedGender={selected}
        />
      </BottomSheetModalCustom>
    </SafeAreaView>
  );
}
