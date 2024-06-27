import React from "react";
import { Text, View } from "@/components/Themed";

import { AntDesign } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

const SettingsCard = ({ setting }: { setting: string }) => {
  return (
    <TouchableOpacity className="flex-row items-center border-b-[0.5px] border-slate-100 pb-2">
      <Text className="flex-1 text-lg">{setting}</Text>
      <View>
        <AntDesign name="right" size={21} color="gray" />
      </View>
    </TouchableOpacity>
  );
};

export default SettingsCard;
