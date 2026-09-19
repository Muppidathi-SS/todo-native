import { router } from "expo-router";
import { Pressable, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const handleLogout = () => {
    router.replace("/login");
  };
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
      }}
    >
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            fontSize: 50,
            fontWeight: "bold",
            fontFamily: "Poppins_400Regular",
          }}
        >
          Hello Welcome Home
        </Text>
        <Pressable
          style={{
            backgroundColor: "#A62039",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={handleLogout}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins_400Regular",
            }}
          >
            Logout
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
