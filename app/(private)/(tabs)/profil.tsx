import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { View, Text, SafeAreaView, ScrollView } from "react-native";

const ProfilScreen = () => {
  const {
    data: profil,
    isLoading,
    isError,
  } = useQuery({
    queryKey: ["profil"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/users/1").then((response) =>
        response.json()
      ),
  });

  if (isLoading) {
    return (
      <View className="flex-1 items-center justify-center">
        <Text className="animate-bounce text-lg dark:text-white">
          Chargement...
        </Text>
        <View className="mt-4 flex-row space-x-2">
          <View className="h-3 w-3 animate-bounce rounded-full bg-blue-500 delay-0" />
          <View className="h-3 w-3 animate-bounce rounded-full bg-blue-500 delay-100" />
          <View className="h-3 w-3 animate-bounce rounded-full bg-blue-500 delay-200" />
        </View>
      </View>
    );
  }

  if (isError) {
    return <Text>Error</Text>;
  }

  return (
    <SafeAreaView className="flex-1">
      <ScrollView className="flex-1 bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800">
        <View className="p-8">
          <Text className="mb-8 text-center text-4xl font-bold text-blue-900 dark:text-blue-200">
            Mon Profil
          </Text>

          <View className="mb-10 items-center">
            <View className="rounded-full border-4 border-blue-200 p-1 shadow-lg dark:border-blue-400">
              <Avatar alt="profil_avatar" className="h-40 w-40">
                <AvatarImage
                  className="h-40 w-40 rounded-full"
                  source={{
                    uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbgk0yfCOe55931lf6q0osfhGRU-fnH8Im1g&s",
                  }}
                />
                <AvatarFallback>
                  <Text className="text-2xl">{profil?.name?.charAt(0)}</Text>
                </AvatarFallback>
              </Avatar>
            </View>
            <Text className="mt-6 text-2xl font-bold text-gray-800 dark:text-white">
              {profil?.name}
            </Text>
            <Text className="mt-2 text-lg text-blue-600 dark:text-blue-300">
              {profil?.email}
            </Text>
          </View>

          <View className="space-y-6 rounded-3xl bg-white p-6 shadow-xl dark:bg-gray-800">
            <View className="border-b border-gray-200 pb-4 dark:border-gray-700">
              <Text className="text-sm font-medium text-blue-500 dark:text-blue-300">
                TÉLÉPHONE
              </Text>
              <Text className="mt-1 text-lg text-gray-800 dark:text-white">
                {profil?.phone}
              </Text>
            </View>

            <View className="border-b border-gray-200 pb-4 dark:border-gray-700">
              <Text className="text-sm font-medium text-blue-500 dark:text-blue-300">
                SITE WEB
              </Text>
              <Text className="mt-1 text-lg text-blue-600 underline dark:text-blue-400">
                {profil?.website}
              </Text>
            </View>

            <View>
              <Text className="text-sm font-medium text-blue-500 dark:text-blue-300">
                ENTREPRISE
              </Text>
              <Text className="mt-2 text-xl font-semibold text-gray-800 dark:text-white">
                {profil?.company.name}
              </Text>
              <Text className="mt-2 italic text-gray-600 dark:text-gray-300">
                "{profil?.company.catchPhrase}"
              </Text>
              <Text className="mt-1 text-gray-500 dark:text-gray-400">
                {profil?.company.bs}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProfilScreen;
