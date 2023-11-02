import { Button, Text, View, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
function HomeParent() {
  const { navigate } = useNavigation();

  return (
    <View style={styles.buttonContainer}>
      <Button
        title="Home Child - 1"
        onPress={() => navigate("Home Child", { data: "Child 1" })}
      />

      <Button
        title="Home Child - 2"
        onPress={() => navigate("Home Child", { data: "Child 2" })}
      />
    </View>
  );
}

export default HomeParent;

const styles = StyleSheet.create({
  buttonContainer:{
    padding:10,
  }
})