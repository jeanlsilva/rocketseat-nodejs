import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Main from './pages/main';

const Stack = createStackNavigator();

function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Main' component={Main} options={{
                    headerStyle: {
                        backgroundColor: '#DA552F'
                    },
                    headerTintColor: '#FFF'
                }} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default Routes;