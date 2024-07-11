import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import { MaterialIcons } from "react-native-vector-icons";
import Postbtn from "../../components/Postbtn";
import OtpInput from "../../components/OtpInput";

const verifyEmail = () => {
  return (
    <>
      <View
        style={{
          top: 180,
          padding: 18,
        }}
      >
        <View 
         
        style={{width:80,height:80,borderRadius:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F7F7F7",marginLeft:15}}>

          <View style={{borderWidth:.1,borderColor:"#c3c3c3",padding:6,borderRadius:50,backgroundColor:"#fff"}}>
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
          <Postbtn title="Verify" iconName="sc-telegram"
              buttonStyle={styles.custombtn}
          
          iconColor="#E6F2FF" />
        </View>
      </View>
    </>
  );
};

export default verifyEmail;

const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 1.2,
    paddingTop: 50,
    marginLeft:23
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginBottom: 10,
    marginLeft:23

  },
  resend: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginVertical: 20,
    textAlign: "center",
  },
  custombtn:{
    width:307
  }
});
