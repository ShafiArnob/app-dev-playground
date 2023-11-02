import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GoalTracker from "./screens/GoalTracker";
import DogShow from "./screens/DogShow";

//Tab Bottom
const Tab = createBottomTabNavigator()

function TabGroup(){
  return(
    <Tab.Navigator>
      <Tab.Screen name="goalTracker" component={GoalTracker}/>
      <Tab.Screen name="dogShow" component={DogShow}/>

    </Tab.Navigator>
  )
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
