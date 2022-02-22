import { View, StyleSheet, Text } from "react-native";

export default function Card(props) {
    return (
        <View
            style={{...styles.card,...props.style}}
        >
    { props.children } 
        </View >
    );
}

const styles = StyleSheet.create({
    card: {
        width: 300,
        maxHeight: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {
            width: 0, height: 2
        },
        shadowOpacity: 0.26,
        elevation: 5,
        backgroundColor: 'white',
        shadowRadius: 6,
        padding: 20,
        borderRadius: 10
    }
});