import { View, Text, StyleSheet } from "react-native";
const GameScreen = ({}) => {
  return (
    <View style={style.screen}>
      <Text style={{ color: "white", fontSize: 32 }}>Opponent's Guess</Text>
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
