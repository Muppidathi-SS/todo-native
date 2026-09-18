import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function App() {
  return (
    <SafeAreaView>
      <Text style={{ fontSize: 24, fontWeight: "bold" }}>
        Hello React Native..
      </Text>
      <Text style={{ fontSize: 20 }}>I am Expo..</Text>
    </SafeAreaView>
  );
}
