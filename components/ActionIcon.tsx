import { Text, View } from "@/components/Themed";
import React from "react";
import { Image, ImageSourcePropType, TouchableOpacity } from "react-native";

export default function ActionIcon({
  imageUrl,
  text,
}: {
  imageUrl: ImageSourcePropType;
  text: string;
}) {
  return (
    <TouchableOpacity className="items-center ">
      <View className="bg-slate-200 w-14 justify-center h-14 rounded-full items-center">
        <Image className=" " source={imageUrl} />
      </View>
      <Text>{text}</Text>
    </TouchableOpacity>
  );
}
