import { Keyboard } from "react-native";
import React, { forwardRef, ReactNode, useCallback } from "react";
import {
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
  BottomSheetModal,
} from "@gorhom/bottom-sheet";
import { useColorScheme } from "nativewind";

interface BottomSheetProps {
  index?: number;
  snapPoints: Array<string | number>;
  handleSheetChanges?: () => void;
  onClose?: () => void;
  children: ReactNode;
}

const BACKDROP_OPACITY = 0.4;
const DEFAULT_BACKDROP_APPEARANCE_INDEX = 0;
const DEFAULT_BACKDROP_DISAPPEARANCE_INDEX = -1;

export const BottomSheetModalCustom = forwardRef<
  BottomSheetModal,
  BottomSheetProps
>((props, ref) => {
  const { index, snapPoints, handleSheetChanges, children, onClose } = props;

  const { colorScheme } = useColorScheme();

  const handleClose = () => {
    Keyboard.dismiss();
    if (onClose) onClose();
  };

  const renderBackdrop = useCallback(
    (backDropProps: BottomSheetBackdropProps) => (
      <BottomSheetBackdrop
        {...backDropProps}
        opacity={BACKDROP_OPACITY}
        appearsOnIndex={DEFAULT_BACKDROP_APPEARANCE_INDEX}
        disappearsOnIndex={DEFAULT_BACKDROP_DISAPPEARANCE_INDEX}
        onPress={handleClose}
      />
    ),
    [handleClose]
  );

  return (
    <BottomSheetModal
      ref={ref}
      index={index}
      enablePanDownToClose={true}
      snapPoints={snapPoints}
      onChange={handleSheetChanges}
      backdropComponent={renderBackdrop}
      handleIndicatorStyle={{ display: "none" }}
      backgroundStyle={{
        backgroundColor: colorScheme === "dark" ? "#18181b" : "white",
      }}
    >
      {children}
    </BottomSheetModal>
  );
});
