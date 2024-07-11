
import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
} from "react-native";
import { MaterialCommunityIcons ,MaterialIcons,FontAwesome6,Icon} from "react-native-vector-icons";
import Postbtn from "../../components/Postbtn";
import Input from './../../components/Input';

const profile = () => {
    // const [selectedDate, setSelectedDate] = useState('');
    // const onDayPress = (day) => {
    //     setSelectedDate(day.dateString);
    //   };
  return (
    <ScrollView>
      <View style={{ marginTop: 140, padding: 15, paddingLeft: 30 }}>
       <View 
         style={{width:80,height:80,borderRadius:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F7F7F7",marginLeft:5}}>
           <View style={{borderWidth:.1,borderColor:"#c3c3c3",padding:6,borderRadius:50,backgroundColor:"#fff"}}>
             <FontAwesome6 name="user-large" size={30} color="#5F656F" />
           </View>
         </View>
        <Text style={styles.title}>Create Your Profile</Text>
        <Text style={styles.subtitle}>
          Enter your credentials to create your account
        </Text>
        <View style={{ marginTop: 20 }}>
          <Text style={{fontSize:14,fontWeight:"800"}}>Enter Username</Text>
          <Input placeholder="Enter username" iconName="user-circle-o" />
          {/* <Text style={{fontSize:14,fontWeight:"800"}}>Date Of Birth</Text> */}
         {/*add  calender */}

            <View style={{display:"flex",gap:6,marginTop:20}}>
                <Text style={{fontSize:14,fontWeight:"800"}}>Choose Your Gender</Text>
                <View style={{display:"flex",flexDirection:"row",paddingTop:15}}>
                <MaterialIcons name="radio-button-checked" size={24} color="#007BFF" /> 
                <Text style={{fontSize:13,fontWeight:"600",textAlign:"center"}}>Male</Text>
                </View>
                <View style={{display:"flex",flexDirection:"row",paddingTop:15}}>
                <MaterialIcons name="radio-button-unchecked" size={24} color="#000" /> 
                <Text style={{fontSize:13,fontWeight:"600",textAlign:"center"}}>Female</Text>
                </View>
                
            </View>
          <View
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop:20
            }}
          >
            <Postbtn title="Continue" iconName="sc-telegram" buttonStyle={styles.custombtn} iconColor="#E6F2FF" />
          </View>
         
        </View>
      </View>
    </ScrollView>
  )
}

export default profile
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
      width:320
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