import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import useUserStore from "@/store/user.store";
import { save } from "@/lib/utils/secure_store";
export default function LoginScreen() {
  const router = useRouter();
  const { setIsAuthenticated }: any = useUserStore();

  const handleLogin = async () => {
    setIsAuthenticated(true);
    await save("isAuthenticated", "true");
    router.replace("/(private)/(tabs)");
  };

  return (
    <SafeAreaView className="flex-1 bg-white dark:bg-gray-900">
      <View className="flex-1 px-4 py-8">
        <View className="mb-8 items-center">
          <Image
            source={require("@/assets/images/react-logo.png")}
            className="h-32 w-32"
          />
          <Text className="mt-4 text-2xl font-bold text-gray-900 dark:text-white">
            Connexion
          </Text>
        </View>

        <View className="space-y-4">
          <View>
            <Text className="mb-2 text-gray-700 dark:text-gray-300">Email</Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-white p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Entrez votre email"
              placeholderTextColor="#9CA3AF"
              keyboardType="email-address"
              autoCapitalize="none"
            />
          </View>

          <View>
            <Text className="mb-2 text-gray-700 dark:text-gray-300">
              Mot de passe
            </Text>
            <TextInput
              className="rounded-lg border border-gray-300 bg-white p-4 text-gray-900 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
              placeholder="Entrez votre mot de passe"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
            />
          </View>

          <TouchableOpacity
            className="mt-2 items-end"
            onPress={() => console.log("Mot de passe oublié")}
          >
            <Text className="text-blue-500">Mot de passe oublié ?</Text>
          </TouchableOpacity>

          <TouchableOpacity
            className="mt-4 rounded-lg bg-blue-500 p-4"
            onPress={handleLogin}
          >
            <Text className="text-center font-semibold text-white">
              Se connecter
            </Text>
          </TouchableOpacity>

          <View className="mt-6 flex-row justify-center">
            <Text className="text-gray-700 dark:text-gray-300">
              Pas encore de compte ?{" "}
            </Text>
            <TouchableOpacity onPress={() => console.log("Inscription")}>
              <Text className="text-blue-500">S'inscrire</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
