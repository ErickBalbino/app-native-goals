import React from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteItem }) => {
  const deleteGoalHandler = () => {
    onDeleteItem(id);
  };

  return (
    <View style={styles.goalItem}>
      <Pressable android_ripple={{ color: "#eee" }} onPress={deleteGoalHandler}>
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  goalItem: {
    margin: 10,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
  },
  goalText: {
    color: "white",
    padding: 10,
    fontSize: 18,
  },
});

export default GoalItem;
