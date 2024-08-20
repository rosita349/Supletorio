import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import { StackNavigeitor } from './src/NAVEGACION/StackNavigeitor';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigeitor/>
    </NavigationContainer>
  );
}