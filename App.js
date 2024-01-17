import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { Home } from './screens/Home'
import { About } from './screens/About'
import { Praca } from './screens/Praca'
import { Relaks } from './screens/Relaks'
import { Regeneracja } from './screens/Regeneracja'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen
          name='Home'
          component={Home}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='About'
          component={About}
          options={{ headerShown: false }}
        />
        <Stack.Screen name='Praca' component={Praca} />
        <Stack.Screen name='Relaks' component={Relaks} />
        <Stack.Screen name='Regeneracja' component={Regeneracja} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
