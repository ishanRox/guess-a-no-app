import { View, StyleSheet, Text } from "react-native";
import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
export default function Card() {
  return (
    <View
      style={styles.container}
    >
      <Header title="Guess a number" />
      <StartGameScreen/>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
  
 }
});