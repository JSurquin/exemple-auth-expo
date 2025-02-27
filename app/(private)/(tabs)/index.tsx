import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  SafeAreaView,
  Button,
} from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import useUserStore from "@/store/user.store";
import { save } from "@/lib/utils/secure_store";
import { Redirect, useRouter } from "expo-router";

export default function HomeScreen() {
  const { setIsAuthenticated }: any = useUserStore();
  const router = useRouter();

  const logout = () => {
    setIsAuthenticated(false);
    save("isAuthenticated", "false");
    router.replace("/login");
  };

  return (
    <SafeAreaView>
      <View>
        <View style={styles.titleContainer}>
          <Text
            className="text-red-800"
            style={{ fontSize: 30, marginTop: 10 }}
          >
            Bienvenido!
          </Text>
          <Button title="Logout" onPress={() => logout()} />
          <HelloWave />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
