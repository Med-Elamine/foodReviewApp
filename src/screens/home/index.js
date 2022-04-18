import React from "react";
import { View, Text, Button } from "react-native";
import {NavigationService} from "@src/routes";

import sharedStyles from "../../styles/sharedStyles";

const Home = () => {

    const pressHandler = () => {
        NavigationService.resetStack("Details");
    }

    return(
        <View style={sharedStyles.container}>
            <Text style={sharedStyles.title}>Home Screen</Text>
            <Button title='go to details' onPress={pressHandler}/>
        </View>
    );
}

export default Home;