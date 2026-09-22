import { FontAwesome6, MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Profile() {
  const handleLogout = () => {
    router.replace("/login");
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F8F9FF",
        paddingHorizontal: 16,
      }}
    >
      <View
        style={{
          justifyContent: "space-between",
          flexDirection: "row",
          paddingVertical: 20,
        }}
      >
        <Text style={{ fontSize: 26, fontWeight: "bold" }}>Profile</Text>

        <Ionicons name="settings-sharp" size={24} color="black" />
      </View>
      <View
        style={{
          backgroundColor: "white",
          borderWidth: 1,
          borderColor: "#e4e3eb",
          borderRadius: 12,
          paddingVertical: 10,
          paddingHorizontal: 16,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            gap: 20,
          }}
        >
          <View
            style={{
              width: 70,
              height: 70,
              borderRadius: 50,
              backgroundColor: "#4F46E5",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: 40,
                fontWeight: "bold",
                color: "white",
              }}
            >
              M
            </Text>
          </View>
          <View style={{ gap: 3 }}>
            <Text style={{ fontSize: 20, fontWeight: "bold" }}>Muppidathi</Text>
            <Text style={{ fontSize: 20, color: "#464555" }}>
              aadhi@gmail.com
            </Text>
            <View style={styles.badge}>
              <View style={styles.dot} />
              <Text style={styles.text}>Web Developer</Text>
            </View>
          </View>
          <MaterialCommunityIcons
            style={{ marginHorizontal: "auto" }}
            name="qrcode-scan"
            size={45}
            color="black"
          />
        </View>
        <Pressable
          style={{
            backgroundColor: "#4F46E5",
            height: 50,
            borderRadius: 10,
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
            gap: 15,
            marginTop: 35,
          }}
        >
          <FontAwesome6 name="edit" size={18} color="white" />
          <Text
            style={{
              color: "white",
              fontSize: 20,
              fontWeight: 500,
            }}
          >
            Edit Profile
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  badge: {
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "flex-start",
    backgroundColor: "#EEF0FF",
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    marginTop: 8,
  },

  dot: {
    width: 7,
    height: 7,
    borderRadius: 7,
    backgroundColor: "#4338CA",
    marginRight: 7,
  },

  text: {
    fontSize: 14,
    fontWeight: "600",
    color: "#4338CA",
  },
});
