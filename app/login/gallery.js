import { View, Text , StyleSheet, ScrollView,Image} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons,FontAwesome6 } from 'react-native-vector-icons';
import Postbtn from "../../components/Postbtn";
import Input from './../../components/Input';
import Car from '../../assets/car.png'
import Lion from '../../assets/lion.png'
import Room from '../../assets/room.png'
import Boy from '../../assets/boy.png'
import Card from '../../components/Card';
const gallery = () => {
  return (
    <ScrollView>
      <View style={{ marginTop: 140, padding: 15, paddingLeft: 30 }}>
       <View 
         style={{width:80,height:80,borderRadius:50,display:"flex",alignItems:"center",justifyContent:"center",backgroundColor:"#F7F7F7",marginLeft:5}}>
           <View style={{borderWidth:.1,borderColor:"#c3c3c3",padding:6,borderRadius:50,backgroundColor:"#fff"}}>
             <FontAwesome6 name="heart-circle-check" size={30} color="#5F656F" />
           </View>
         </View>
        <Text style={styles.title}>Choose Interest</Text>
        <Text style={styles.subtitle}>
        Enter your credentials to create your account
        </Text>
        <View style={{ marginTop: 20,display:"flex",flexDirection:"row",flexWrap:"wrap",gap:10 }}>
          <View >
            <Card url={Car} title="Cars"/>
          </View>
          <View >
            <Card url={Room} title="Houses"/>
          </View>
          <View >
            <Card url={Boy} title="Musics"/>
          </View>
          <View >
            <Card url={Room} title="Houses"/>
          </View>
          <View >
            <Card url={Lion} title="Sports"/>
          </View>
          <View >
            <Card url={Car} title="Cars"/>
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
    </ScrollView>
  )
}

export default gallery

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
    
  });