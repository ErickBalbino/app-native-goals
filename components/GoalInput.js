import React from "react";
import { useState } from "react";
import {
  View,
  TextInput,
  Button,
  StyleSheet,
  Modal,
  Image,
} from "react-native";

const GoalInput = ({ visible, onAddGoal, changeVisiblity }) => {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [missingText, setMissingText] = useState(false);

  const changeVisibilityModal = () => {
    changeVisiblity(false);
  };

  const goalInputHandler = (enteredText) => {
    setEnteredGoalText(enteredText);
  };

  const addGoalHandler = () => {
    if (enteredGoalText.length == 0) {
      return setMissingText(true);
    }

    onAddGoal(enteredGoalText);
    setEnteredGoalText("");
    changeVisiblity(false);
    setMissingText(false);
  };

  return (
    <Modal visible={visible} animationType="slide">
      <View style={styles.inputContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/goal.png")}
        />

        <TextInput
          style={missingText ? styles.textInputMiss : styles.textInput}
          placeholder="Adicione uma meta..."
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />

        <View style={styles.buttonsContainer}>
          <View style={styles.button}>
            <Button
              title="Cancelar"
              onPress={changeVisibilityModal}
              color="#f31282"
            />
          </View>

          <View style={styles.button}>
            <Button
              title="Adicionar"
              onPress={addGoalHandler}
              color="#5e0acc"
            />
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    backgroundColor: "#311b6b",
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#e4d0ff",
    width: "100%",
    borderRadius: 6,
    padding: 16,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    fontSize: 18,
    marginTop: 50,
  },
  textInputMiss: {
    borderWidth: 2,
    borderColor: "#f00",
    width: "100%",
    borderRadius: 6,
    padding: 16,
    color: "#120438",
    backgroundColor: "#e4d0ff",
    fontSize: 18,
    marginTop: 50,
  },
  buttonsContainer: {
    marginTop: 30,
    flexDirection: "row",
  },
  button: {
    width: "30%",
    marginHorizontal: 8,
  },
});
