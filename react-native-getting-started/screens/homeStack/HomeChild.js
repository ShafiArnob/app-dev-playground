import { useNavigation, useRoute } from "@react-navigation/native";
import { useLayoutEffect } from "react";
import { Button, Text, View } from "react-native";

function HomeChild() {
  const navigation = useNavigation();
  const route = useRoute();
  const { params } = route;

  useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle: params.data,
    });
  }, []);
  return (
    <View>
      <Text>Home Child: {params.data}</Text>
      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

export default HomeChild;
