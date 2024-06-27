import { ScrollView, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import Container from "@/components/Container";
import StatisticsCard from "@/components/StatisticsCard";
import { Text, View } from "@/components/Themed";

export default function Statistics() {
  const bank = [
    "Bank of the West",
    "Northern Trust",
    "Citizens Bank",
    "First National Bank",
    "KeyBank",
    "Union Bank",
  ];

  const banks = [
    { name: "Fidelity", location: "Accra" },
    { name: "Ecobank", location: "Madina" },
    { name: "Cal Bank", location: "Legon" },
    { name: "Swift", location: "USA" },
    { name: "Arizona", location: "Vegas" },
  ];
  return (
    <Container>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Text className="text-center text-xl font-bold my-8">Statistics</Text>

        <View className="space-y-3 ">
          <View>
            <StatisticsCard
              name="Total Amount"
              purpose="All Transactions"
              amount={223023}
            />
          </View>

          <View>
            <StatisticsCard
              name="Total Sent"
              purpose="Transferred"
              amount={34323}
            />
          </View>

          <View>
            <StatisticsCard
              name="Total Loaned"
              purpose="Amount Borrowed"
              amount={3432}
            />
          </View>

          <View>
            <StatisticsCard
              name="Total Expenses"
              purpose="Amount Spent"
              amount={34342}
            />
          </View>
        </View>
        <Text className="text-center text-xl font-bold my-8">
          Most Used Accounts
        </Text>
        <View className="h-full">
          <FlatList
            data={banks}
            renderItem={({ item, index }) => {
              return (
                <TouchableOpacity
                  key={index}
                  className="justify-between font-bold text-[16px] items-center px-5 mb-4 rounded-2xl h-[48px] bg-slate-200 flex-row "
                >
                  <Text className="flex-1 text-base font-bold">
                    {item.name}
                  </Text>
                  <Text className="text-slate-600">{item.location}</Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </ScrollView>
    </Container>
  );
}
