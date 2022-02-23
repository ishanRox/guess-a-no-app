import { Keyboard, Button, TouchableWithoutFeedback, View, StyleSheet, Text } from "react-native";
import Card from '../components/Card';
import Colors from "../constants/Colors";
import Input from '../components/Input';
import { useState } from "react";

export default function StartGameScreen(props) {

    const [enteredValue, setEnteredValue] = useState('');

    const numberInputHandler = (inputText) => {
        setEnteredValue(inputText.replace(/[^0-9]/g, ''));
    };

    return (
        <TouchableWithoutFeedback onPress={
            () => {
                Keyboard.dismiss();
            }
        }>
            <View
                style={styles.screen}
            >
                <Text style={styles.title}>Game Screen</Text>
                <Card style={styles.inputContainer}>
                    <Text>
                        Select a number
                    </Text>
                    <Input
                        onChangeText={numberInputHandler}
                        value={enteredValue}
                        keyboardType="numeric" style={styles.input} />
                    <View style={styles.buttonContainer}>
                        <View style={styles.buttons}>
                            <Button color={Colors.accent} title="Reset" />
                        </View>
                        <View style={styles.buttons}>
                            <Button color={Colors.primary} title="confirm" />
                        </View>
                    </View>
                </Card>
            </View></TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    input: { width: 160, textAlign: "center" },
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: { fontSize: 20, marginVertical: 10 },
    inputContainer: {
        width: 300,
        maxHeight: '80%',
        alignItems: 'center',

    },
    buttonContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 },
    buttons: {
        width: 90
    }

});