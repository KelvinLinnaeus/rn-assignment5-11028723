import {
  ScrollView,
  FlatList,
  TouchableOpacity,
  Text,
  View,
} from "react-native";
import React from "react";
import Container from "@/components/Container";
import StatisticsCard from "@/components/StatisticsCard";
import { Text as ThemeText } from "@/components/Themed";

export default function Statistics() {
  const banks = [
    { name: "Fidelity", location: "Accra" },
    { name: "Ecobank", location: "Madina" },
    { name: "Cal Bank", location: "Legon" },
    { name: "Swift", location: "USA" },
    { name: "Arizona", location: "Vegas" },
    { name: "Arizona", location: "Vegas" },
    { name: "Bank of America", location: "New York" },
    { name: "Chase Bank", location: "Chicago" },
    { name: "Wells Fargo", location: "San Francisco" },
    { name: "TD Bank", location: "Toronto" },
    { name: "HSBC", location: "London" },
    { name: "UBS", location: "Zurich" },
    { name: "Mitsubishi UFJ Financial Group", location: "Tokyo" },
    { name: "Santander Bank", location: "Madrid" },
    { name: "ING Bank", location: "Amsterdam" },
    { name: "Credit Suisse", location: "Geneva" },
    { name: "Barclays", location: "London" },
    { name: "BNP Paribas", location: "Paris" },
    { name: "Royal Bank of Canada", location: "Toronto" },
    { name: "DBS Bank", location: "Singapore" },
    { name: "Standard Chartered Bank", location: "Hong Kong" },
    { name: "BBVA", location: "Madrid" },
    { name: "Citi Bank", location: "New York" },
    { name: "Goldman Sachs", location: "New York" },
    { name: "Morgan Stanley", location: "New York" },
    { name: "State Street Corporation", location: "Boston" },
    { name: "Deutsche Bank", location: "Frankfurt" },
    { name: "Industrial and Commercial Bank of China", location: "Beijing" },
    { name: "China Construction Bank", location: "Beijing" },
    { name: "Bank of China", location: "Beijing" },
  ];
  return (
    <Container>
      <View>
        <ThemeText className="text-center text-xl font-bold my-8">
          Statistics
        </ThemeText>

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
        <ThemeText className="text-center text-xl font-bold my-8">
          Most Used Accounts
        </ThemeText>
        <View className="pb-10 ">
          <FlatList
            showsVerticalScrollIndicator={false}
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
      </View>
    </Container>
  );
}
