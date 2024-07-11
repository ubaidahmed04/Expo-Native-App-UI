import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
} from "react-native";
import React from "react";
import FrontImg from "../assets/FrontImg.png";
import Postbtn from "../components/Postbtn";

const homeScreen = () => {
  return (
    <ScrollView>
      <View>
        <Image source={FrontImg} />
      </View>
      <View>
        <Text style={Styles.text_lg}>
          best social media to make new friends
        </Text>
        <Text style={Styles.text_sm}>
          the social media platform where you can be your authentic self,
          connect with friends, meet new people, and discover content that
          inspires you.
        </Text>
      </View>
      <View style={Styles.btn_container}>
          <Postbtn title="Post" iconName="sc-telegram" iconColor="#E6F2FF" 
          />
        <Postbtn
          title="Log In"
          iconName="sc-telegram"
          buttonStyle={Styles.custombtn}
          textStyle={Styles.customText}
          iconColor="#007AFF"

        />
      </View>
    </ScrollView>
  );
};

export default homeScreen;

const Styles = StyleSheet.create({
  text_lg: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 20,
    letterSpacing: 1,
    lineHeight: 30,
    fontWeight: "900",
    paddingHorizontal: 50,
    paddingTop: 15,
    color: "#404753",
  },
  text_sm: {
    textAlign: "center",
    textTransform: "uppercase",
    fontSize: 12,
    padding: 15,
  },
  btn_container: {
    display: "flex",
    alignItems: "center",
    gap: 20,
    borderRadius: 16,
    padding: 15,
  },
  custombtn: {
    backgroundColor: "#E6F2FF",
  },
  customText: {
    color: "#007AFF",
  },
});
