import { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, FlatList, Button } from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

const App = () => {
  const [goals, setGoals] = useState([]);
  const [viewModal, setViewModal] = useState(false);

  const addGoalHandler = (enteredGoalText) => {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredGoalText, key: Math.random().toString() },
    ]);
  };

  const deleteGoalHandler = (id) => {
    setGoals((prevState) => {
      return prevState.filter((item) => item.key !== id);
    });
  };

  const changeVisibilityModal = (state) => {
    if (state === false) return setViewModal(state);

    setViewModal(true);
  };

  return (
    <>
      <StatusBar style="light" />

      <View style={styles.appContainer}>
        <Button
          title="Adicionar"
          color="#5e0acc"
          onPress={changeVisibilityModal}
        />

        <GoalInput
          onAddGoal={addGoalHandler}
          visible={viewModal}
          changeVisiblity={changeVisibilityModal}
        />

        <View style={styles.goalsContainer}>
          <FlatList
            data={goals}
            renderItem={(itemData) => {
              return (
                <GoalItem
                  id={itemData.item.key}
                  text={itemData.item.text}
                  onDeleteItem={deleteGoalHandler}
                />
              );
            }}
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 40,
    paddingTop: 60,
  },

  goalsContainer: {
    flex: 5,
    marginTop: 30,
  },
});

export default App;
