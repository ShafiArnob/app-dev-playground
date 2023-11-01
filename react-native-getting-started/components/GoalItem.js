import { StyleSheet, View, Text, Pressable } from "react-native";
function GoalItem(props) {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#dddddd" }} //Android
        style={({pressed})=>pressed && styles.pressedItem} //ios + android
        onPress={props.onDeleteGoal.bind(this, props.id)}
      >
        <Text style={styles.goalText}>{props.text}</Text>
      </Pressable>
    </View>
  );
}

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    marginVertical: 8,
    borderRadius: 6,
    backgroundColor: "#5e0acc",
    color: "white",
  },
  pressedItem:{
    opacity:0.5
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});
