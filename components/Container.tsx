import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "@/components/Themed";

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return <SafeAreaView className="pt-5 px-5 h-full">{children}</SafeAreaView>;
};

export default Container;
