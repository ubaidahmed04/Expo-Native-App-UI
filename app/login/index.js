// login screen

import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Postbtn from "../../components/Postbtn";
import Input from './../../components/Input';

const login = () => {
  return (
    <ScrollView>
      <MaterialCommunityIcons
        name="arrow-left-drop-circle"
        size={40}
        color="#007AFF"
        style={{ position: "absolute", top: 80, left: 40 }}
      />
      <View style={{ marginTop: 140, padding: 15, paddingLeft: 30 }}>
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to create your account
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text>Full Name</Text>
          <Input placeholder="Enter Full Name" iconName="user-circle-o" />
          <Text>Full Name</Text>

          <Input placeholder="Enter Email" iconName="envelope" />
          <Text>Full Name</Text>

          <Input placeholder="Enter Password" iconName="lock" secureTextEntry />
          <View style={styles.checkboxContainer}>
            <TextInput type="check" />
            <Text>Agree to terms & conditions</Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Postbtn title="Post" iconName="sc-telegram" iconColor="#E6F2FF" />
          </View>
          <View style={styles.divider}>
            <Text
              style={{ position: "relative", top: 10, backgroundColor: "#fff" }}
            >
              or
            </Text>
          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Postbtn
              title="Google"
              iconName="sc-google-plus"
              buttonStyle={styles.custombtn}
              textStyle={styles.customText}
              iconColor="#000"
            />
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", alignItems: "" }}
          >
            <Text style={styles.footerText}>
              Already have an account?{" "}
              <Text style={styles.loginBtn}>login</Text>{" "}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default login;
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 1.2,
    paddingTop: 50,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  divider: {
    marginVertical: 5,
    alignItems: "center",
    width: "100%",
    borderBottomColor: "#c3c3c3",
    borderBottomWidth: 1,
  },
  footerText: {
    marginTop: 20,
    textAlign: "center",
    marginLeft: 10,
  },
  custombtn: {
    backgroundColor: "#fff",
    borderColor: "#c3c3c3",
    borderWidth: 1,
    marginTop: 10,
  },
  customText: {
    color: "#000",
  },
  loginBtn: {
    color: "#007BFF",
    backgroundColor: "#E6F2FF",
    padding: 10,
    fontWeight: "700",
    fontSize: 14,
  },
});
