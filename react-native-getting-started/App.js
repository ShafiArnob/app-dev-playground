import { useState } from "react";
import { FlatList, StyleSheet, View, Button, Platform, StatusBar as StatusBarRN } from "react-native";
import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  const [modalIsVisible, setModalIsVisible] = useState(false);
  const [courseGoals, setCourseGoals] = useState([]);

  console.log(StatusBarRN.currentHeight);

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }

  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      { text: enteredGoalText, id: Math.random().toString() },
    ]);
  }

  function addDeleteHandler(id) {
    setCourseGoals((prevGoals) => prevGoals.filter((goal) => goal.id !== id));
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.paddingTopForAndroid} />
      <Button
        title="Add New Goal"
        color="#5e0acc"
        onPress={startAddGoalHandler}
      />
      <GoalInput visible={modalIsVisible} onAddGoal={addGoalHandler} />
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
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingHorizontal: 20,
  },
  paddingTopForAndroid: {
    height: Platform.OS === 'android' ? StatusBarRN.currentHeight + 10 : 0,
    backgroundColor: '#F0F0F0',
  },
  goalsContainer: {
    flex: 5,
  },
});
