import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const GoalItem = props => {
  return (
    <View style={styles.listItem}>
      <Text>{props.title}</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  listItem: {
    padding: 5,
    margin: 5,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
export default GoalItem;
