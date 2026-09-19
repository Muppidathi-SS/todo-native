import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Ionicons } from "@expo/vector-icons";

export default function Profile() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FA",
      }}
    >
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 24,
        }}
      >
        <View
          style={{
            width: 100,
            height: 100,
            borderRadius: 50,
            backgroundColor: "#E0E7FF",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 24,
          }}
        >
          <Ionicons name="person" size={48} color="#3B82F6" />
        </View>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1A1A1A",
            textAlign: "center",
            marginBottom: 8,
          }}
        >
          Welcome Profile!
        </Text>

        <Text
          style={{
            fontSize: 16,
            color: "#666666",
            textAlign: "center",
            marginBottom: 32,
          }}
        >
          You have successfully navigated to your Profile tab.
        </Text>

        <Pressable
          style={{
            backgroundColor: "#A62039",
            height: 50,
            width: "100%",
            borderRadius: 12,
            justifyContent: "center",
            alignItems: "center",
            shadowColor: "#A62039",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.2,
            shadowRadius: 8,
            elevation: 4,
          }}
          onPress={handleLogout}
        >
          <Text
            style={{
              color: "#FFFFFF",
              fontSize: 16,
              fontWeight: "600",
            }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
