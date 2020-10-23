import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';
  
  const Stack = createStackNavigator();
  
  function Routes() {
    return (                   
      <NavigationContainer>
        <Stack.Navigator>          
          <Stack.Screen name="Main" component={Main} options={{
            title: 'Project2', 
            headerStyle:{ backgroundColor: '#00FF55', }, 
            headerTintColor: '#022',
            headerTitleStyle: {
              textAlign: 'center',
              alignSelf: 'center'
            }
            }} />
        </Stack.Navigator> 
      </NavigationContainer>      
    );
  }
  
  export default Routes;