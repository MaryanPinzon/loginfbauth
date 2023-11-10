import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "./HomeScreen";
import Settings from "./Settings";
import Chat from "./Chat";
import LoginScreen from "./LoginScreen";
import { MaterialIcons } from "@expo/vector-icons"; //iconos
const Tab = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "red",
        tabBarInactiveTintColor: "green",
        tabBarActiveBackgroundColor: "yellow",
      }}
    >
      <Tab.Screen
        name="Login"
        component={LoginScreen}
        options={{
          tabBarStyle: { display: "none" },
          title: "Inciar sesión",
          tabBarIcon: () => (
            <MaterialIcons name="login" size="22" color="red" />
          ),
        }}
      />
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          title: "Inicio",
          tabBarIcon: () => <MaterialIcons name="home" size="22" color="red" />,
        }}
      />
      <Tab.Screen
        name="Settings"
        component={Settings}
        options={{
          title: "Configuración",
          tabBarIcon: () => (
            <MaterialIcons name="settings" size="60" color="red" />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          title: "Chat",
          tabBarIcon: () => <MaterialIcons name="chat" size="60" color="red" />,
        }}
      />
    </Tab.Navigator>
  );
}
