import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native'
import React from 'react'
import {EvilIcons} from 'react-native-vector-icons';

const Postbtn = ({title,iconName,buttonStyle, textStyle,iconColor}) => {
  return (
    <>
      <TouchableOpacity style={[Styles.Postbutton,buttonStyle]}>
        <Text style={[Styles.PostbuttonText,textStyle]}>{title}</Text>
        <EvilIcons name={iconName} size={20} color={iconColor}  />
      </TouchableOpacity>
    </>
  )
}

export default Postbtn

const Styles =StyleSheet.create({
    Postbutton: {
        display:"flex",
        flexDirection:"row",
        alignItems:"center",
        gap:10,
        justifyContent:"center",
        backgroundColor: '#007BFF',
        paddingVertical: 10,
        paddingHorizontal: 25,
        width:300,
        borderRadius: 5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3.35,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3.35,
    
      },
      PostbuttonText: {
        color: '#E6F2FF',
        fontSize: 16,
        fontWeight: 'bold',
        textAlign:"center"
      },

})