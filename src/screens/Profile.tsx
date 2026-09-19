import Settings from "@/components/Settings";
import { router } from "expo-router";
import { Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

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
            backgroundColor: "red",
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 12,
          }}
        >
          <Text style={{ fontSize: 70, fontWeight: "bold", color: "white" }}>
            A
          </Text>
        </View>

        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#1A1A1A",
            textAlign: "center",
          }}
        >
          Aadhi
        </Text>
        <Text style={{ fontSize: 18 }}>aadhi@gmail.com</Text>
        <View>
          <Text>Settings</Text>
          <Settings />
        </View>

        {/* <Pressable
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
        </Pressable> */}
      </View>
    </SafeAreaView>
  );
}
