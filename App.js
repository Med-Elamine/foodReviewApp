import React, {useState} from "react";
import AppLoading from "expo-app-loading";

import * as Font from "expo-font";
import {StackNavigation} from "@src/routes";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {NavigationService} from "@src/routes";

const stack = createStackNavigator();

const getFonts = () => Font.loadAsync({
    'nunito-regular': require('./src/assets/fonts/Nunito-Regular.ttf'),
    'nunito-bold': require('./src/assets/fonts/Nunito-Bold.ttf'),
  });



export default function App() {

  const [fontsLoaded,setFontLoaded] = useState(false);

  return (
    <NavigationContainer ref={NavigationService.navigationRef}>
      {fontsLoaded?(<StackNavigation/>):(<AppLoading startAsync={getFonts}
        onFinish={()=> setFontLoaded(true)}
        onError={console.warn}
      />)} 
    </NavigationContainer>
  );
}

