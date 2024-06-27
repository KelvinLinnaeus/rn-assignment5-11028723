import {
  Appearance,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Text, View } from "@/components/Themed";
import Container from "@/components/Container";
import ActionIcon from "@/components/ActionIcon";
import Transaction from "@/components/Transaction";
import { AntDesign } from "@expo/vector-icons";

export default function Home() {
  return (
    <Container>
      <ScrollView
        className="space-y-4 h-full"
        showsVerticalScrollIndicator={false}
      >
        <View className="flex-row items-center h-16 ">
          <View className="flex-row space-x-4 flex-1">
            <View className=" relative h-16 w-16">
              <Image
                className="h-full w-full"
                resizeMode="contain"
                source={require("@/assets/images/profile.png")}
              />
            </View>
            <View>
              <Text className="text-slate-600">Welcome back</Text>
              <Text className="text-xl">Kelvin Mhacwilson</Text>
            </View>
          </View>

          <View className=" rounded-full  bg-slate-200  flex-row justify-center items-center h-14 w-14">
            <AntDesign name="search1" size={24} color="black" />
          </View>
        </View>

        <View className="py-2 w-full h-[230px] items-center ">
          <Image
            className="h-full w-full"
            resizeMode="cover"
            source={require("@/assets/images/Card.png")}
          />
        </View>

        <View className="flex-row items-center justify-between">
          <ActionIcon
            imageUrl={require("@/assets/images/send.png")}
            text="Sent"
          />
          <ActionIcon
            imageUrl={require("@/assets/images/receive.png")}
            text="Receive"
          />
          <ActionIcon
            imageUrl={require("@/assets/images/loan.png")}
            text="Loan"
          />
          <ActionIcon
            imageUrl={require("@/assets/images/topUp.png")}
            text="Topup"
          />
        </View>

        <View>
          <View className="flex-row justify-between mb-2">
            <Text className="text-lg">Transaction</Text>
            <Text className="text-lg text-blue-600">See All</Text>
          </View>
          <View className="space-y-3">
            <View>
              <Transaction
                imageUrl={require("../../assets/images/apple.png")}
                reference="Apple Store"
                purpose="Entertainment"
                amount="- $5.99"
              />
            </View>
            <View>
              <Transaction
                imageUrl={require("../../assets/images/spotify.png")}
                reference="Spotify"
                purpose="Music"
                amount="- $12.99"
              />
            </View>
            <View>
              <Transaction
                isBlue={true}
                imageUrl={require("../../assets/images/moneyTransfer.png")}
                reference="Money Transfer"
                purpose="Transaction"
                amount="$300"
              />
            </View>
            <View>
              <Transaction
                imageUrl={require("../../assets/images/grocery.png")}
                reference="Grocery"
                purpose="Transaction"
                amount="- $88"
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
