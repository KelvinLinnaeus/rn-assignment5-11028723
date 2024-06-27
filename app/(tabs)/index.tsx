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

export default function Home() {
  return (
    <Container>
      <ScrollView className="space-y-4 h-full">
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
            <Image
              className="h-1/2 w-1/2"
              resizeMode="contain"
              source={require("@/assets/images/search.png")}
            />
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
          <View className="flex-row justify-between ">
            <Text className="text-lg">Transaction</Text>
            <Text className="text-lg">See All</Text>
          </View>
          <View className="">
            <Transaction
              imageUrl={require("../../assets/images/apple.png")}
              reference="Apple Store"
              purpose="Entertainment"
              amount="- $5.99"
            />
            <Transaction
              imageUrl={require("../../assets/images/spotify.png")}
              reference="Spotify"
              purpose="Music"
              amount="- $12.99"
            />
            <Transaction
              imageUrl={require("../../assets/images/moneyTransfer.png")}
              reference="Money Transfer"
              purpose="Transaction"
              amount="$300"
            />
            <Transaction
              imageUrl={require("../../assets/images/grocery.png")}
              reference="Grocery"
              purpose="Transaction"
              amount="- $88"
            />
          </View>
        </View>
      </ScrollView>
    </Container>
  );
}
