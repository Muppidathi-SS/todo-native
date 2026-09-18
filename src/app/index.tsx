import { Pressable, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
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
        <View>
          <Text style={{ fontSize: 50, fontFamily: "Poppins_700Bold", fontWeight: "bold" }}>Hey</Text>
          <Text style={{ fontSize: 50, fontFamily: "Poppins_700Bold", fontWeight: "bold" }}>Login Now</Text>
        </View>
        <View style={{ flexDirection: "row", marginTop: 15 }}>
          <Text style={{ color: "gray", fontSize: 20 }}>If you are new?</Text>
          <Text
            style={{
              marginLeft: 8,
              fontSize: 20,
              fontFamily: "Poppins_700Bold",
              fontWeight: "bold",
              color: "black",
            }}
          >
            Create Account
          </Text>
        </View>
        <TextInput
          placeholder="Username"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            paddingHorizontal: 15,
            height: 50,
            marginTop: 30,
            fontFamily: "Poppins_400Regular",
          }}
        />
        <TextInput
          placeholder="Password"
          style={{
            borderWidth: 1,
            borderColor: "#ddd",
            borderRadius: 10,
            paddingHorizontal: 15,
            height: 50,
            marginTop: 30,
            fontFamily: "Poppins_400Regular",
          }}
        />
        <Pressable
          style={{
            backgroundColor: "#A62039",
            height: 50,
            borderRadius: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
          onPress={() => console.log("Login pressed")}
        >
          <Text
            style={{
              color: "white",
              fontSize: 18,
              fontFamily: "Poppins_700Bold",
              fontWeight: "bold",
            }}
          >
            Login
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}
