import { View, Text, StyleSheet } from "react-native";
import Title from "../components/Title";
import COLORS from "../constants/colors";
const GameScreen = ({}) => {
  return (
    <View style={style.screen}>
      <Title color={COLORS.accent500}>Opponent's Guess</Title>
      {/* Guess */}
      <View>
        <Text>Higher or lower?</Text>
        {/* + - */}
      </View>
      <View>{/* LOG ROUNDS */}</View>
    </View>
  );
};

const style = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 24,
  },
});

export default GameScreen;
