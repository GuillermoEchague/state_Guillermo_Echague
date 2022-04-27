import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Home } from '../screens/Home';
import { AddTodo } from '../screens/AddTodo';



const Stack = createStackNavigator();

export const StackNavigator = () => {
    return (
        <Stack.Navigator 
         screenOptions={{
           headerStyle: {
             elevation:0,
             shadowColor:'transparent'
           },
           cardStyle: {
             backgroundColor: 'white'
           }
         }}
        
        >
          <Stack.Screen name="Home" options={{headerShown:false}} component={Home} />
          <Stack.Screen name="AddTodo" options={{
              // headerShown: false, 
              presentation: 'modal',
            }} component={AddTodo} />
        </Stack.Navigator>
    );
  }