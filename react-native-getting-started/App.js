import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoalText, setenteredGoalText] = useState([])

  function goalInputHandler(enteredText){
    setenteredGoalText(enteredText)
  }

  function addGoalHandler(){
    console.log(enteredGoalText);
  }
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer  }>
        <TextInput style={styles.textInput} placeholder='Your Goal' onChangeText={goalInputHandler}/>
        <Button title='Add Goal' onPress={addGoalHandler}/>
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of Goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({  
  appContainer:{
    flex:1,
    padding:50
  },
  inputContainer:{
    // backgroundColor:"red",
    flex:1,
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    marginBottom:24,
    borderBottomWidth:1,
    borderBottomColor:"#cccccc"
  },
  goalsContainer:{
    flex:5
  },
  textInput:{
    borderWidth:1,
    borderColor:"#cccccc",
    width:"70%",
    marginRight:8,
    padding:8
  }
});
