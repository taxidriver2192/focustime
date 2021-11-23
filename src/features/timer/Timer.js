import React, { useState } from 'react';
import {
  Button,
  View,
  StyleSheet,
  Text,
  Vibration,
  Platform,
} from 'react-native';
import { ProgressBar } from 'react-native-paper';
import { color } from '../../util/colors';
import { sizes } from '../../util/sizes';
import { CountDown } from '../../components/CountDown';
import { useKeepAwake } from 'expo-keep-awake';

import { Timing } from './Timing';

export const Timer = ({ focusSubject, onTimerEnd, clearSubject }) => {
  useKeepAwake();
  const DEFULT_TIME = 1;
  const [minutes, setMinutes] = useState(DEFULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);
  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === 'ios') {
      const interval = setInterval(() => Vibration.vibrate(), 1000);
      setTimeout(() => clearInterval(interval), 10000);
    } else {
      Vibration.vibrate(10000);
    }
  };

  const onEnd = () => {
    vibrate();
    setMinutes(DEFULT_TIME);
    setProgress(1);
    setIsStarted(false);
    onTimerEnd();
  };

  const changeTime = (min) => {
    setMinutes(min);
    setProgress(1);
    setIsStarted(false);
  };
  return (
    <View style={styles.container}>
      <View style={styles.contdown}>
        <CountDown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={{ paddingTop: sizes.lg }}>
        <Text style={styles.title}>Focusing on:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.countDown}>
        <ProgressBar
          progress={progress}
          color="#5E84E2"
          style={{ height: 10 }}
        />
      </View>
      <View style={styles.buttonWrapper}>
        <Timing onChangeTime={changeTime} />
      </View>
      <View style={styles.buttonWrapper}>
        {isStarted ? (
          <Button
            title="Pause"
            onPress={() => {
              setIsStarted(false);
            }}
          />
        ) : (
          <Button
            title="Start"
            onPress={() => {
              setIsStarted(true);
            }}
          />
        )}
        
      </View>
      <View style={styles.clearSubject}>
          <Button
            title="Stop"
            onPress={() => {
              clearSubject();
            }}
          />
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: color.white,
    textAlign: 'center',
  },
  task: {
    color: color.white,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  contdown: {
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonWrapper: {
    flex: 0.3,
    padding: 15,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  countDown: {
    paddingTop: 10,
  },
  clearSubject:{
    paddingBottom: 25,
    paddingLeft: 25,
  }
});
