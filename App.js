import { Text, View } from 'react-native';
import { styles } from './assets/styles/allstyles';
import LoginScreen from './componentes/LoginScreen';
import HomeScreen from './componentes/HomeScreen';
import Chat from './componentes/Chat';
import Settings from './componentes/Settings';
import BottomTabs from './componentes/BottomTabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="BottomTabs">
        <Stack.Screen
          name="Login"component={LoginScreen} options={{ title: "Inicio de sesión" }}
        />
        <Stack.Screen
          name="Chat" component={Chat} options={{ title: "Conversa con nosotros" }}
        />
        <Stack.Screen
          name="Settings" component={Settings} options={{ title: "Configuración" }}
        />
        <Stack.Screen
          name="BottomTabs" component={BottomTabs} options={{ title: "Sistema de facturación" }}
        />
        <Stack.Screen
          name="Home" component={HomeScreen} options={{ title: "Cliente" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}