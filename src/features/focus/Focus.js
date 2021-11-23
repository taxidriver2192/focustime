import React, { useState } from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';
import { TextInput } from 'react-native-paper';
import {fontSizes, sizes } from '../../util/sizes';


export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);
  return (
    <View style={styles.container}>
      <View style={styles.titelContainer}>
        <Text style={styles.titel}>What would you like to focus on</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={{ flex: 1, marginRight: sizes.md }}
            onSubmitEditing={({ nativeEvent }) => {
              setSubject(nativeEvent.text);
            }}
          />
          <Button
            onPress={() => {
              addSubject(subject);
            }}
            title="+"
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titelContainer: {
    flex: 0.5,
    padding: sizes.md,
    justifyContent: 'center',
  },
  titel: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: fontSizes.lg,
  },
  inputContainer: {
    paddingTop: sizes.md,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
