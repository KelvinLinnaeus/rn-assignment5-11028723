import { Text, View } from "@/components/Themed";
import React from "react";
import { Image, ImageSourcePropType } from "react-native";

export default function ActionIcon({
  imageUrl,
  text,
}: {
  imageUrl: ImageSourcePropType;
  text: string;
}) {
  return (
    <View className="items-center ">
      <View className="bg-slate-200 p-4 rounded-full items-center">
        <Image className=" " source={imageUrl} />
      </View>
      <Text>{text}</Text>
    </View>
  );
}
