import { View, Text, Image } from 'react-native'
import React from 'react'
const Card = ({url,title}) => {
  return (
    <>
      <Image
            source={url}
            style={{width:100,height:100,borderRadius:10,position:"relative"}}
            />
            <Text style={{color:"#fff",left:10,fontSize:12,bottom:23}}>{title}</Text>
    </>
  )
}

export default Card