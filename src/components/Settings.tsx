import Entypo from "@expo/vector-icons/Entypo";
import { Text, View } from "react-native";

export default function Settings() {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        backgroundColor: "gray",
      }}
    >
      <Entypo name="language" size={24} color="black" />
      <Text>Languages</Text>
    </View>
  );
}
