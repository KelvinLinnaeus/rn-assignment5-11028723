import { View, Text } from "react-native";
import React from "react";

interface StatisticsCardProps {
  name: string;
  purpose: string;
  amount: number;
}

const StatisticsCard: React.FC<StatisticsCardProps> = ({
  name,
  purpose,
  amount,
}) => {
  return (
    <View className="flex-row justify-between items-center bg-slate-200 rounded-lg p-2">
      <View className="flex-1">
        <Text className="text-xl">{name}</Text>
        <Text className="text-slate-600">{purpose}</Text>
      </View>
      <View>
        <Text className=" text-lg font-bold">${amount}</Text>
      </View>
    </View>
  );
};

export default StatisticsCard;
