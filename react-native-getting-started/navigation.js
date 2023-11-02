import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import GoalTracker from "./screens/GoalTracker";
import DogShow from "./screens/DogShow";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from '@expo/vector-icons';
//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator screenOptions={({route, navigation})=>({
      //change nav icons
      tabBarIcon: ({color, focused, size}) => {
        let iconName
        if(route.name == "Goal Tracker"){
          iconName = focused ? "home" : "home-outline"
        }

        return <Ionicons name={iconName} size={size} color={color} />
      },
      //change active icon color
      tabBarActiveTintColor: "white",
      //change inactive icon color
      tabBarInactiveTintColor: "gray"
    })}>
      <Tab.Screen
        name="Goal Tracker"
        component={GoalTracker}
        // options={{
        //   tabBarIcon: () => <AntDesign name="home" size={24} color="black" />,
        // }}
      />
      <Tab.Screen
        name="Dog Show"
        component={DogShow}
        options={{
          //change nav icons inline
          tabBarIcon: ({color, focused, size}) => (
            <MaterialCommunityIcons name="dog" size={size} color={color} />
          ),
          tabBarInactiveTintColor: "gray"
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <TabGroup />
    </NavigationContainer>
  );
}
