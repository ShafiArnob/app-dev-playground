import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalTracker from "./screens/tabScreens/GoalTracker";
import DogShow from "./screens/tabScreens/DogShow";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeParent from "./screens/homeStack/HomeParent";
import HomeChild from "./screens/homeStack/HomeChild";

//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home Stack" component={HomeParent} />
      <HomeStack.Screen
        name="Home Child"
        component={HomeChild}
        options={{ presentation: "fullScreenModal" }}
      />
    </HomeStack.Navigator>
  );
}

//Tab Bottom
const Tab = createBottomTabNavigator();

function TabGroup() {
  return (
    <Tab.Navigator
      screenOptions={({ route, navigation }) => ({
        //change nav icons
        tabBarIcon: ({ color, focused, size }) => {
          let iconName;
          if (route.name == "Goal Tracker") {
            iconName = focused ? "football" : "football-outline";
          } else if (route.name == "HomeStackGroup") {
            iconName = focused ? "home" : "home-outline";
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        //change active icon color
        tabBarActiveTintColor: "white",
        //change inactive icon color
        tabBarInactiveTintColor: "gray",
        // headerShown: false,
      })}
    >
      <Tab.Screen
        name="HomeStackGroup"
        component={HomeStackGroup}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />

      <Tab.Screen name="Goal Tracker" component={GoalTracker} />

      <Tab.Screen
        name="Dog Show"
        component={DogShow}
        options={{
          //change nav icons inline
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name="dog" size={size} color={color} />
          ),
          tabBarInactiveTintColor: "gray",
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
