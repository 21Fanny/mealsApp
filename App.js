import { StatusBar } from 'expo-status-bar'
import { StyleSheet } from 'react-native'
import CategoriesScreen from './screens/CategoriesScreens'

import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen'
import MealDetailScreen from './screens/MealDetailsScreen'

const Stack = createStackNavigator()

export default function App () {
  return (
   <>
    <StatusBar styles='dark' />
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#000000' },
          headerTintColor: 'white',
          contentStyle: { backgroundColor: '#000000' }
        }}
      >
        <Stack.Screen
          name="Film categories"
          component={CategoriesScreen}
        />
        <Stack.Screen
          name="MealsOverview"
          component={MealsOverviewScreen}
          options={{
            title: 'All categories',
            headerTintColor: 'white',
            contentStyle: { backgroundColor: '#000000' }
          }}
        />
          <Stack.Screen
            name="Film Details"
            component={MealDetailScreen}
          />

      </Stack.Navigator>
    </NavigationContainer>
   </>
  )
}

const styles = StyleSheet.create({
 container: {
 }
})
