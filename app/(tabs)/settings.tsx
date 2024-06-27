import { Appearance, StyleSheet, Switch } from "react-native";

import { Text, View } from "@/components/Themed";
import Container from "@/components/Container";
import SettingsCard from "@/components/SettingsCard";
import { useState } from "react";

export default function Settings() {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => {
    setIsEnabled((previousState) => !previousState);
    if (isEnabled) {
      Appearance.setColorScheme("light");
    } else {
      Appearance.setColorScheme("dark");
    }
  };
  return (
    <Container>
      <Text className="text-center text-xl font-bold mt-8">Settings</Text>

      <View className="flex space-y-4 mt-20">
        <View>
          <SettingsCard setting="Language" />
        </View>
        <View>
          <SettingsCard setting="My Profile" />
        </View>
        <View>
          <SettingsCard setting="Contact Us" />
        </View>
        <View>
          <SettingsCard setting="Change Password" />
        </View>
        <View>
          <SettingsCard setting="Privacy Policy" />
        </View>
      </View>

      <View className="flex-row justify-between mt-20">
        <Text className="flex-1 text-lg">Theme</Text>
        <View className="w-20 items-end ">
          <Switch
            trackColor={{ false: "#767577", true: "green" }}
            onValueChange={toggleSwitch}
            value={isEnabled}
            style={{ transform: [{ scaleX: 1.3 }, { scaleY: 1.3 }] }}
          />
        </View>
      </View>
    </Container>
  );
}
