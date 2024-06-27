import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";
import { Text, View } from "@/components/Themed";
import { appTheme } from "@/utils/theme";

import React from "react";

interface TransactionProps {
  imageUrl: ImageSourcePropType;
  reference: string;
  amount: string;
  purpose: string;
  isBlue?: boolean;
}

const Transaction: React.FC<TransactionProps> = ({
  amount,
  reference,
  imageUrl,
  purpose,
  isBlue,
}) => {
  return (
    <TouchableOpacity className="flex-row space-x-4 items-center py-2">
      <View className="w-14 h-14 bg-slate-200 rounded-full items-center justify-center">
        <Image className="scale-110" source={imageUrl} />
      </View>
      <View className="flex-row flex-1 items-center">
        <View className="flex-1">
          <Text className="font-bold text-base">{reference} </Text>
          <Text className="text-slate-600">{purpose} </Text>
        </View>
        <View>
          <Text className={`font-bold text-base ${isBlue && "text-blue-600"}`}>
            {amount}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Transaction;
