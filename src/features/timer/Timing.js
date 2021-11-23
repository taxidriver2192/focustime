import React from 'react';
import { View, StyleSheet, Button } from 'react-native';

export const Timing = ({ onChangeTime }) => {
  return (
    <>
      <View style={styles.timingButton}>
        <Button title="0.30" onPress={() => onChangeTime(0.30)} />
      </View>
      <View style={styles.timingButton}>
        <Button title="1" onPress={() => onChangeTime(1)} />
      </View>
      <View style={styles.timingButton}>
        <Button title="5" onPress={() => onChangeTime(5)} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    alignItems: 'center',
  },
});
