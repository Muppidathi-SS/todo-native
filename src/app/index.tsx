import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <View
        style={{
          paddingVertical: 10,
          paddingHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>Hey,</Text>
          <Text style={{ fontSize: 50, fontWeight: "bold" }}>Login Now</Text>
        </View>
        <Text style={{ marginTop: 20, color: "gray" }}>
          If you are new?
          <Text style={{ fontWeight: "bold", marginLeft: 5, color: "black" }}>
            Create Account
          </Text>
        </Text>
      </View>
    </SafeAreaView>
  );
}
