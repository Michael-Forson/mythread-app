import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import threadicon from "../assets/ThreadsLogo.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
//import { useNavigation } from "@react-navigation/native";
const LoginScreen = ({ navigation }) => {
  const { email, setEmail } = useState("");
  const { password, setPassword } = useState("");
  // const navigation = useNavigation();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ marginTop: 50 }}>
        <Image
          style={{ width: 150, height: 100, resizeMode: "contain" }}
          source={threadicon}
        />
      </View>
      <KeyboardAvoidingView>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Text style={{ fontSize: 17, fontWeight: "bold", marginTop: 25 }}>
            Login to Your Account
          </Text>
        </View>
        <View style={{ marginTop: 40 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
            }}
          >
            <MaterialIcons
              style={{ marginLeft: 8 }}
              name="email"
              size={24}
              color="gray"
            />
            <TextInput
              value={email}
              onChangeText={(text) => setEmail(text)}
              placeholderTextColor={"gray"}
              style={{
                color: "gray",
                marginLeft: 10,
                width: 300,
                fontSize: email ? 16 : 16,
              }}
              placeholder="Enter you email"
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              gap: 5,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              paddingVertical: 5,
              borderRadius: 5,
              marginTop: 30,
            }}
          >
            <FontAwesome
              style={{ marginLeft: 8 }}
              name="lock"
              size={24}
              color="gray"
            />
            <TextInput
              secureTextEntry={true}
              value={password}
              onChangeText={(text) => setPassword(text)}
              style={{
                color: "gray",
                marginLeft: 10,
                width: 300,
                fontSize: password ? 16 : 16,
              }}
              placeholderTextColor={"gray"}
              placeholder="Enter you password"
            ></TextInput>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 20,
            }}
          >
            <Text>Keep me logged In</Text>
            <Text style={{ fontWeight: "500", color: "#007FFF" }}>
              Forgot password
            </Text>
          </View>
        </View>
        <Pressable
          style={{
            width: 200,
            backgroundColor: "black",
            padding: 15,
            marginVertical: 40,
            marginHorizontal: "auto",
            borderRadius: 6,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fonteweight: "bold",
              fontSize: 16,
              color: "white",
            }}
          >
            Login
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.navigate("Register")} style={{}}>
          <Text style={{ textAlign: "center" }}>
            Don't have an account Signup
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({});
