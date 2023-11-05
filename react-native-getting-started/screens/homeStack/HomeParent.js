import { Button, Text, View, StyleSheet, Pressable } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { FontAwesome } from '@expo/vector-icons';
function HomeParent() {
  const { navigate } = useNavigation();
  const navigation = useNavigation()

  useLayoutEffect(()=>{
    navigation.setOptions({
      headerLeft: ()=>(
        <Pressable onPress={()=>navigation.openDrawer()}>
          <FontAwesome name="bars" size={24} color="black" />
        </Pressable>
      ),
      // headerRight:() => <Button title="test"/>
    })
  }, [])

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