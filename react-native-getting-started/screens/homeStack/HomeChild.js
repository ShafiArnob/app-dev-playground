import { useRoute } from "@react-navigation/native"
import { Text, View } from "react-native"

function HomeChild(){
  const route = useRoute()
  const {params} = route
  return(
    <View>
      <Text>Home Child: {params.data}</Text>
    </View>
  )
}

export default HomeChild