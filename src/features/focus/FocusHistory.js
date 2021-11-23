import React from 'react';
import {
  View,
  StyleSheet,
  FlatList,
  Text,
  SafeAreaView,
  Button,
} from 'react-native';

const HistoryItem = ({item, index}) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
}

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear;
  };
  return (
    <>
      <SafeAreaView style={{ flex: 0.5 }}>
        <Text style={styles.titel}>Things we focusing on</Text>
        {!!focusHistory.length && 
          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: 'center' }}
            date={focusHistory}
            renderItem={HistoryItem}
          />
        }
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  historyItem: ({
    color : status > 1 ? 'red' : 'green',
    fontSize: 20,
  }),
  titel: {
    color: 'white',

  }
})
