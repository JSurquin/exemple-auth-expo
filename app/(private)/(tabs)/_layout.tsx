// Import des dépendances nécessaires
import { Redirect, Tabs } from "expo-router";
import React, { useEffect, useState } from "react";
import { Platform, Text, View } from "react-native";

// Import des composants personnalisés
import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import useUserStore from "@/store/user.store";
import { getValueFor } from "@/lib/utils/secure_store";
import * as SecureStore from "expo-secure-store";

// Composant principal pour la navigation par onglets
export default function TabLayout() {
  // Récupération du thème de couleur
  const colorScheme = useColorScheme();
  // État d'authentification global
  const { isAuthenticated, setIsAuthenticated }: any = useUserStore();
  // État local pour gérer le chargement initial
  const [isReady, setIsReady] = useState(false);

  // Fonction pour vérifier si l'utilisateur est déjà authentifié
  const checkIfUserIsAlreadyAuthenticated = async () => {
    const isAuthenticated = await getValueFor("isAuthenticated");
    if (isAuthenticated) {
      setIsAuthenticated(true);
    }
    setIsReady(true);
  };

  // Effect pour vérifier l'authentification au chargement
  useEffect(() => {
    if (!isAuthenticated) {
      checkIfUserIsAlreadyAuthenticated();
    }
  }, [isAuthenticated]);

  // Redirection vers la page de login si non authentifié
  if (!isAuthenticated && isReady) {
    return <Redirect href="/(public)/(auth)/login" />;
  }

  // Rendu de la navigation par onglets si authentifié
  if (isAuthenticated) {
    return (
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          // Configuration spécifique selon la plateforme
          tabBarStyle: Platform.select({
            ios: {
              // Fond transparent sur iOS pour l'effet de flou
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        {/* Onglet Accueil */}
        <Tabs.Screen
          name="index"
          options={{
            headerShown: false,
            title: "Cool!",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="house.fill" color={color} />
            ),
          }}
        />
        {/* Onglet À propos */}
        <Tabs.Screen
          name="about"
          options={{
            title: "A propos de nous",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="paperplane.fill" color={color} />
            ),
          }}
        />
        {/* Onglet Profil */}
        <Tabs.Screen
          name="profil"
          options={{
            headerShown: false,
            title: "Profil",
            tabBarIcon: ({ color }) => (
              <IconSymbol size={28} name="person.fill" color={color} />
            ),
          }}
        />
      </Tabs>
    );
  }
}
