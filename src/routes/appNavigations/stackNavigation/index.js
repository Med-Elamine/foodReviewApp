import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {Home, Details} from "@src/screens";

const Stack = createStackNavigator();

const StackNavigation = () => {
    return(
            <Stack.Navigator
                initialRouteName="Home"
                screenOptions={() => ({
                    headerShown: true,
                })}
            >
                <Stack.Screen name="Home" component={Home} />
                <Stack.Screen name="Details" component={Details} />
            </Stack.Navigator>
    );
}

export default StackNavigation;