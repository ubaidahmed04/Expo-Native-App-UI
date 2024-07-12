import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  MaterialIcons,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import OtpInput from "../components/OtpInput";
import Postbtn from "../components/Postbtn";
import Input from "../components/Input";
import { Link, useNavigation } from "@react-navigation/native";

const VerifyScreen = () => {
  const navigation = useNavigation();
  const handle = () => {
    navigation.navigate("Confirmation");
  };
  return (
    <>
      <MaterialCommunityIcons
        name="arrow-left-drop-circle"
        size={40}
        color="#007AFF"
        onPress={() => {
          navigation.goBack();
        }}
        style={{ position: "absolute", top: 80, left: 40 }}
      />
      <View
        style={{
          top: 150,
          padding: 18,
        }}
      >
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F7F7F7",
            marginLeft: 15,
          }}
        >
          <View
            style={{
              borderWidth: 0.1,
              borderColor: "#c3c3c3",
              padding: 6,
              borderRadius: 50,
              backgroundColor: "#fff",
            }}
          >
            <MaterialIcons name="mark-email-unread" size={40} color="#525866" />
          </View>
        </View>

        <Text style={styles.title}>Let Verify Your Email</Text>

        <Text style={styles.subtitle}>
          Enter The Code Sent To Your Email Address
        </Text>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "700",
            marginTop: 30,
            marginLeft: 23,
          }}
        >
          Enter Code
        </Text>
        {/* otp Input component */}
        <OtpInput />

        <Text style={styles.resend}>
          Don't Get Any Code ?
          <Text style={{ fontSize: 13, fontWeight: "800" }}> Resend Code</Text>{" "}
        </Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Postbtn
            title="Verify"
            iconName="sc-telegram"
            buttonStyle={styles.custombtn}
            onPress={handle}
            iconColor="#E6F2FF"
          />
        </View>
      </View>
    </>
  );
};

export default VerifyScreen;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 1.2,
    paddingTop: 30,
    marginLeft: 23,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginBottom: 10,
    marginLeft: 23,
  },
  resend: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginVertical: 20,
    textAlign: "center",
  },
  custombtn: {
    width: 307,
  },
});
