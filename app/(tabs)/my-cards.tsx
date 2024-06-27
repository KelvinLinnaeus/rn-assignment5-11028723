import { Image, ScrollView } from "react-native";
import React from "react";
import Container from "@/components/Container";
import { Text, View } from "@/components/Themed";

export default function MyCards() {
  return (
    <Container>
      <Text className="text-center text-xl font-bold my-8">My Cards</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="py-2 w-full h-[230px] items-center mb-4">
          <Image
            className="h-full w-full"
            resizeMode="contain"
            source={require("@/assets/images/Card.png")}
          />
        </View>
        <View className="py-2 w-full h-[230px] items-center mb-4">
          <Image
            className="h-full w-full"
            resizeMode="contain"
            source={require("@/assets/images/Card.png")}
          />
        </View>
        <View className="py-2 w-full h-[230px] items-center mb-4">
          <Image
            className="h-full w-full"
            resizeMode="contain"
            source={require("@/assets/images/Card.png")}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
