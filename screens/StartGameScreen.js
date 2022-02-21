import { View, StyleSheet, Text } from "react-native";

export default function StartGameScreen(props) {
    return (
        <View
            style={styles.screen}
        >
            <Text>Game Screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    }
});