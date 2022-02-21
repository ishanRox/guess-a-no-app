import { View, StyleSheet, Text } from "react-native";
import Header from "./components/Header";

export default function App() {
  return (
    <View
      style={styles.container}
    >
      <Header title="Guess a no" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});