import React from "react";
import { View, Text } from "react-native";

import sharedStyles from '../../styles/sharedStyles';

const Modal = () => {
    return(
        <View style={sharedStyles.container}>
            <Text>Modal Screen</Text>
        </View>
    );
}

export default Modal;