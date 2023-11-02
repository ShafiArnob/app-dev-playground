import { useState } from "react";
import {
  FlatList,
  StyleSheet,
  View,
  Button,
  StatusBar as StatusBarRN,
} from "react-native";
import GoalItem from "../../components/GoalItem";
import GoalInput from "../../components/GoalInput";

const GoalTracker = () => {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  function addDeleteHandler(id) {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput
        visible={modalIsVisible}
        onAddGoal={addGoalHandler}
        onCancel={endAddGoalHandler}
      />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          //render items
          renderItem={(itemData) => {
            return (
              <GoalItem
                text={itemData.item.text}
                id={itemData.item.id}
                onDeleteGoal={addDeleteHandler}
              />
            );
          }}
          // "key" replacement
          keyExtractor={(item, index) => {
            return item.id;
          }}
        />
      </View>
    </View>
  );
};
export default GoalTracker;

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a",
  },
  paddingTopForAndroid: {
    // height: Platform.OS === "android" ? StatusBarRN.currentHeight + 10 : 0,
    backgroundColor: "#F0F0F0",
  },
  goalsContainer: {
    flex: 5,
  },
});
