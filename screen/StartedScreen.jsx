import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  TextInput,
  ScrollView,
  Pressable,
} from "react-native";
import { MaterialCommunityIcons } from "react-native-vector-icons";
import { useNavigation } from "@react-navigation/native";
import Postbtn from "../components/Postbtn";
import Input from "../components/Input";

const StartedScreen = () => {
  const navigation = useNavigation();
  const handle = () => {
    navigation.navigate("Verify");
  };
  return (
    <ScrollView>
      <MaterialCommunityIcons
        name="arrow-left-drop-circle"
        size={40}
        color="#007AFF"
        onPress={() => {
          navigation.goBack();
        }}
        style={{ position: "absolute", top: 80, left: 40 }}
      />
      <View style={{ marginTop: 140, padding: 15, paddingLeft: 30 }}>
        {/* <Button title="Go to Verify Email" onPress={handle} /> */}
        <Text style={styles.title}>Let's Get Started</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to create your account
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{ fontSize: 12, fontWeight: "700" }}>Full Name</Text>
          <Input placeholder="Enter Full Name" iconName="user-circle-o" />
          <Text style={{ fontSize: 12, fontWeight: "700" }}>Email</Text>

          <Input placeholder="Enter Email" iconName="envelope" />
          <Text style={{ fontSize: 12, fontWeight: "700" }}>Password</Text>

          <Input placeholder="Enter Password" iconName="lock" secureTextEntry />
          <View style={styles.checkboxContainer}>
            {/* <TextInput type="check" /> */}
            <Text style={{ fontSize: 12, fontWeight: "700" }}>
              Agree to terms & conditions
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
              title="Verify"
              iconName="sc-telegram"
              onPress={handle}
              iconColor="#E6F2FF"
            />
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
              // onPress={() => navigation.navigate('HomeScreen')}
            />
          </View>
          <View
            style={{ display: "flex", flexDirection: "row", alignItems: "" }}
          >
            <View>
              <Text style={styles.footerText}>Already have an Account?</Text>
            </View>
            <View>
              <Pressable style={styles.loginBtn}>
                <Text style={{ color: "#007BFF" }}>Login</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default StartedScreen;

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
    backgroundColor: "#E6F2FF",
    padding: 7,
    fontWeight: "700",
    fontSize: 14,
    top: 13,
    borderRadius: 7,
    marginLeft: 20,
  },
});
