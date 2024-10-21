import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TextInput,
  Pressable,
  Alert,
} from "react-native";
import React, { useState } from "react";
import threadicon from "../assets/ThreadsLogo.png";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Fontisto from "@expo/vector-icons/Fontisto";
import axios from "axios";
const RegisterScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const handleRegister = () => {
    const user = {
      name: name,
      email: email,
      password: password,
    };
    axios
      .post("http://10.0.2.2:3003/api/v1/register", user)
      .then((response) => {
        console.log(response);
        Alert.alert(
          "Registration successful",
          "you have been registered successfully"
        );
        setName("");
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        Alert.alert(
          "Registration failed",
          "An error occured during registration"
        );
        console.log("error", error);
      });
  };
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
            Register Your Account
          </Text>
        </View>
        <View style={{ marginTop: 20 }}>
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
              marginBottom: 30,
            }}
          >
            <Fontisto
              style={{ marginLeft: 8 }}
              name="person"
              size={24}
              color="gray"
            />
            <TextInput
              value={name}
              onChangeText={(text) => setName(text)}
              style={{
                color: "gray",
                marginLeft: 10,
                width: 300,
                fontSize: name ? 16 : 16,
              }}
              placeholderTextColor={"gray"}
              placeholder="Enter you name"
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
        </View>
        <Pressable
          onPress={handleRegister}
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
            Register
          </Text>
        </Pressable>
        <Pressable onPress={() => navigation.goBack()} style={{}}>
          <Text style={{ textAlign: "center" }}>
            Already have an Account? Sign In{" "}
          </Text>
        </Pressable>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;

const styles = StyleSheet.create({});
