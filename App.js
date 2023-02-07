import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, TextInput, View, Alert } from 'react-native';
import React, { useState } from "react";

import QRCode from 'react-native-qrcode-svg';

const Separator = () => <View style={styles.separator} />;

export default function App() {
  const [text, setText] = useState();

  return (
    <View style={styles.container}>
      <TextInput style={styles.textInput}
        placeholder='Value to generate QR Code'
        underlineColorAndroid="transparent"
        value={text}
        onChangeText={txt => {
          if (txt == '') {
            setText = 'NA'
          } else {
            setText(txt);
          }
        }}

      />

      {/* <Button title='Generate QR Code'
        onPress={txt => {
          if (text == '') {
            setText = "Input Value"
          } else {
            setText(text)
          }
        }}>
      </Button> */}
      <View >
        <QRCode value={text} size={300} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'darkgrey',
    alignItems: 'center',
    justifyContent: 'center',
    underlineColorAndroid: 'transparent',
  },

  textInput: {
    width: '80%',
    backgroundColor: "white",
    borderColor: 'grey',
    borderStyle: 'solid',
    borderRadius: 10,
    borderWidth: 1,
    fontSize: 18,
    fontWeight: 'bold',
    fontStyle: 'normal',
    color: 'blue',
    padding: 10,
    marginVertical: 20,
    underlineColorAndroid: 'transparent',
  },

  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});
