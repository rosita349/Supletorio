
import { ScreenOne } from '../SCREEN/ScreenOne';
import { ScreenTwo } from '../SCREEN/ScreenTwo';
import { ScreenTres } from '../SCREEN/ScreenTres';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

  export function  StackNavigeitor() {
  return (
    
    <Stack.Navigator>
      <Stack.Screen name="Screen" component={ScreenOne} />
      <Stack.Screen name="Screen" component={ScreenTwo} />
      <Stack.Screen name="Screen" component={ScreenTres} />
      
    </Stack.Navigator>
  );
}