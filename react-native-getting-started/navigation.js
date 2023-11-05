import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import GoalTracker from "./screens/tabScreens/GoalTracker";
import DogShow from "./screens/tabScreens/DogShow";
import { AntDesign } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import HomeParent from "./screens/homeStack/HomeParent";
import HomeChild from "./screens/homeStack/HomeChild";
import { createDrawerNavigator } from "@react-navigation/drawer";
import DrawerComp from "./screens/drawerScreens/Drawer";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import Tab1 from "./screens/toptabs/tab1";
import { useColorScheme } from "react-native";

//TopTabs
const TopTabs = createMaterialTopTabNavigator();

function TopTabsGroup() {
  return (
    <TopTabs.Navigator
      screenOptions={{
        tabBarLabelStyle: {
          textTransform: "capitalize",
          fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
          height: 5,
          borderRadius: 5,
          backgroundColor: "red",
        },
      }}
    >
      <TopTabs.Screen name="tab1" component={Tab1} />
      <TopTabs.Screen name="DogShow" component={DogShow} />
    </TopTabs.Navigator>
  );
}

//Drawer
const Drawer = createDrawerNavigator();

function DrawerGroup() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="drawer"
        component={DrawerComp}
        options={{ headerShown: true }}
      />
      <Drawer.Screen name="HomeStackGroup" component={HomeStackGroup} />
    </Drawer.Navigator>
  );
}

//Stack
const HomeStack = createNativeStackNavigator();

function HomeStackGroup() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="TabGroup"
        component={TabGroup}
        options={{ headerShown: false }}
      />
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
          } else if (route.name == "home") {
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
        name="home"
        component={HomeParent}
        options={{ headerShown: false, tabBarLabel: "Home" }}
      />

      <Tab.Screen name="Goal Tracker" component={GoalTracker} />

      <Tab.Screen
        name="Dog Show"
        component={TopTabsGroup}
        options={{
          //change nav icons inline
          tabBarIcon: ({ color, focused, size }) => (
            <MaterialCommunityIcons name="dog" size={size} color={color} />
          ),
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
}

export default function Navigation() {
  const currentTheme = useColorScheme();
  return (
    <NavigationContainer
      theme={currentTheme === "dark" ? DarkTheme : DefaultTheme}
    >
      <DrawerGroup />
      {/* <HomeStackGroup /> */}
    </NavigationContainer>
  );
}
