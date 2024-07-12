import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import {
  EvilIcons,
  FontAwesome6,
  MaterialCommunityIcons,
} from "react-native-vector-icons";
import React from "react";
import Postbtn from "../components/Postbtn";
import Profile from "../assets/profile.png";
import { useNavigation } from "@react-navigation/native";

const UploadProfile = () => {
  const navigation = useNavigation();
  const handle = () => {
    navigation.navigate("login");
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
        <View
          style={{
            width: 80,
            height: 80,
            borderRadius: 50,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F7F7F7",
            marginLeft: 5,
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
            <FontAwesome6 name="image" size={30} color="#5F656F" />
          </View>
        </View>
        <Text style={styles.title}>Upload Profile</Text>
        <Text style={styles.subtitle}>Upload Your Profile</Text>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            position: "relative",
          }}
        >
          <Image source={Profile} style={{ borderRadius: 100 }} />
          <View
            style={{
              backgroundColor: "#E6F2FF",
              bottom: 50,
              left: 60,
              padding: 10,
              borderRadius: 50,
            }}
          >
            <EvilIcons name="camera" size={30} color="#007BFF" />
          </View>
        </View>
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
          }}
        >
          <Postbtn
            title="Upload"
            onPress={handle}
            iconName="sc-telegram"
            buttonStyle={styles.custombtn}
            iconColor="#E6F2FF"
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default UploadProfile;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 1.2,
    paddingTop: 30,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginBottom: 10,
  },
  custombtn: {
    backgroundColor: "#007BFF",
    borderColor: "#c3c3c3",
    borderWidth: 1,
    marginTop: 10,
    width: 320,
  },
  customText: {
    color: "#000",
  },
});
