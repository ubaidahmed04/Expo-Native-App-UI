import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";

const OtpInput = () => {
  return (
    <View style={styles.container}>
      <View style={styles.inputGroup}>
        <View style={styles.optInput}>
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
          <TextInput
            style={styles.input}
            maxLength={1}
            keyboardType="numeric"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    marginVertical: 20,
    paddingHorizontal: 40,
    padding: 10,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    alignSelf: "center",
  },
  inputGroup: {
    marginBottom: 5,
  },
  label: {
    marginBottom: 2,
    fontSize: 16,
  },
  optInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    width: 40,
    height: 30,
    borderBottomWidth: 2,
    borderBottomColor: "#ccc",
    textAlign: "center",
    fontSize: 18,
    paddingVertical: 5,
  },
  inputFocused: {
    borderBottomColor: "#007bff",
  },
});

export default OtpInput;
