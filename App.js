import Welcome from "./app/screens/Welcome"
import ChooseLR from "./app/screens/ChooseLR";
import LogIn from "./app/screens/LogIn"
import SignUp from "./app/screens/SignUp"
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
        <Stack.Screen 
          name = "LogIn" 
          component = {LogIn}
        />
        <Stack.Screen 
          name = "SignUp" 
          component = {SignUp}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;