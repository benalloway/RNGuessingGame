import { Text, StyleSheet } from "react-native";
import COLORS from "../constants/colors";

const InstructionText = ({ children, style }) => {
  const styles = StyleSheet.create({
    text: {
      fontSize: 24,
      fontFamily: "open-sans",
      color: COLORS.accent500,
    },
  });

  return <Text style={[styles.text, style]}>{children}</Text>;
};

export default InstructionText;
