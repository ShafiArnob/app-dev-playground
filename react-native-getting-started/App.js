import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Button,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import GoalItem from "./components/GoalItem";
import GoalInput from "./components/GoalInput";

export default function App() {
  
  const [courseGoals, setCourseGoals] = useState([]);



  function addGoalHandler(enteredGoalText) {
    setCourseGoals((currentCourseGoals) => [
      ...currentCourseGoals,
      {text:enteredGoalText, id:Math.random().toString()},
    ]);
  }
  // console.log(courseGoals);
  return (
    <View style={styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>

      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          //render items
          renderItem={(itemData) => {
            return (
              <GoalItem text={itemData.item.text}/>
            );
          }}
          // "key" replacement
          keyExtractor={(item, index)=>{
            return item.id
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    padding: 20,
  },
  
  goalsContainer: {
    flex: 5,
  },
  
});
