import { Button, TextInput,View, StyleSheet, Text } from "react-native";


export default function StartGameScreen(props) {
    return (
        <View
            style={styles.screen}
        >
            <Text style={styles.title}>Game Screen</Text>
            <View style={styles.inputContainer}>
                <Text>
                    Select a number
                </Text>
                <TextInput />
                <View style={styles.buttonContainer}>
                    <Button title="Reset" />
                    <Button title="Confirm" />
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title:{fontSize:20,marginVertical:10},
    inputContainer:{
        width:300,
        maxHeight:'80%',
        alignItems:'center',
        shadowColor:'black',
        shadowOffset:{
            width:0,height:2
        },
       shadowOpacity:0.26 ,
       elevation:5,
       backgroundColor:'white',
       shadowRadius:6,
       padding:20,
       borderRadius:10

    },
    buttonContainer:{flexDirection:'row',width:'100%',justifyContent:'space-between',paddingHorizontal:15}
});