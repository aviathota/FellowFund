import Welcome from "./app/screens/Welcome"
import ChooseLR from "./app/screens/ChooseLR";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name = "Welcome"
          component = {Welcome}
        />
        <Stack.Screen 
          name = "ChooseLR" 
          component = {ChooseLR}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;