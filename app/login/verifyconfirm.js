import { View, Text,StyleSheet } from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from "react-native-vector-icons";
import Postbtn from "../../components/Postbtn";

const verifyconfirm = () => {
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
            <MaterialCommunityIcons name="hand-pointing-right" size={40} color="#525866" />
          </View>
        </View>

        <Text style={styles.title}>Email Verified</Text>

        <Text style={styles.subtitle}>
          Your Email Address Have Been Verified
        </Text>
       
        <View
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            paddingTop:40
          }}
        >
          <Postbtn title="Continue" iconName="sc-telegram"
              buttonStyle={styles.custombtn}
          
          iconColor="#E6F2FF" />
        </View>
      </View>
    </>
  )
}

export default verifyconfirm
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
    width:307,
    marginBottom:50
  }
});
