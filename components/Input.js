import { View, Text, StyleSheet, TextInput } from "react-native";
import React from "react";
import {
  EvilIcons,
  MaterialCommunityIcons,
  FontAwesome,
} from "react-native-vector-icons";

const Input = ({ placeholder, iconName, ...props }) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput style={styles.input} placeholder={placeholder} {...props} />
      <FontAwesome
        name={iconName}
        size={20}
        color="#9fa6b2"
        style={styles.icon}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor: "#fff",
    marginVertical: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 10,
  },
  icon: {
    marginLeft: 10,
  },
});
