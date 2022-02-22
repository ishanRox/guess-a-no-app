import { Button, TextInput, View, StyleSheet, Text } from "react-native";
import Card from '../components/Card';

export default function StartGameScreen(props) {
    return (
        <View
            style={styles.screen}
        >
            <Text style={styles.title}>Game Screen</Text>
            <Card style={styles.inputContainer}>
                <Text>
                    Select a number
                </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
                </Card>
        </View>
    );
}

const styles = StyleSheet.create({
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
    buttonContainer: { flexDirection: 'row', width: '100%', justifyContent: 'space-between', paddingHorizontal: 15 }
});