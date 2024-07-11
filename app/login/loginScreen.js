// login screen

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
import { MaterialCommunityIcons,FontAwesome6 } from "react-native-vector-icons";
import Postbtn from "../../components/Postbtn";
import Input from './../../components/Input';

const loginScreen = () => {
  return (
    <ScrollView>
      <MaterialCommunityIcons
        name="arrow-left-drop-circle"
        size={40}
        color="#007AFF"
        style={{ position: "absolute", top: 80, left: 40 }}
      />
      <View style={{ marginTop: 140, padding: 15, paddingLeft: 30 }}>
      <View 
         
         style={{width:80,height:80,borderRadius:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F7F7F7",marginLeft:5}}>
 
           <View style={{borderWidth:.1,borderColor:"#c3c3c3",padding:6,borderRadius:50,backgroundColor:"#fff"}}>
             <FontAwesome6 name="user-large" size={28} color="#525866" />
           </View>
         </View>
        <Text style={styles.title}>Login</Text>
        <Text style={styles.subtitle}>
          Enter Your Credentials To Access Your Account
        </Text>
        <View style={{ marginTop: 20 }}>
           <Text style={{ fontSize: 12 ,fontWeight:"700"}}>Email Address</Text>
          <Input placeholder="Enter Email" iconName="envelope" />
          <Text  style={{ fontSize: 12,fontWeight:"700" }}>Password</Text>

          <Input placeholder="Enter Password" iconName="lock" secureTextEntry />
          <View style={styles.checkboxContainer}>
            {/* <TextInput type="check" /> */}
            <View>
            <Text>Remember me</Text>
            </View>
            <View>
            <Text style={{ fontSize: 12,fontWeight:"700",color:"#007BFF" }}>Forget Password</Text>
            </View>

          </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:10

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
              marginTop:10
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
            <View>
            <Text style={styles.footerText}>
              Already have an Account?
            </Text>
            </View>
            <View>
            <Pressable style={styles.loginBtn}><Text style={{color: "#007BFF"}}>Login</Text></Pressable>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default loginScreen;
const styles = StyleSheet.create({
  title: {
    fontSize: 25,
    fontWeight: "600",
    lineHeight: 30,
    letterSpacing: 1.2,
    paddingTop: 20,
  },
  subtitle: {
    fontSize: 10,
    fontWeight: "100",
    color: "#667085",
    marginBottom: 10,
  },
  checkboxContainer: {
    flexDirection: "row",
    marginVertical: 10,
    justifyContent:"space-between"
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
    top:13,
    borderRadius:7,
    marginLeft:20
  },
});
