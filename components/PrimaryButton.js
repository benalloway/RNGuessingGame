import { View, Text, Pressable, StyleSheet } from "react-native";
import COLORS from "../constants/colors";
// to use <PrimaryButton onPress={callbackfunction}>[TEXT]</PrimaryButton>
const PrimaryButton = ({ children, onPress }) => {
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        style={({ pressed }) =>
          pressed
            ? [styles.pressed, styles.buttonInnerContainer]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: COLORS.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: COLORS.primary500,
    paddingHorizontal: 16,
    paddingVertical: 8,

    elevation: 2, // android shadow
    // IOS Shadow:
    shadowColor: "black", // ios shadow
    shadowOffset: { width: 0, height: 2 }, // ios shadow
    shadowRadius: 6, // ios shadow
    shadowOpacity: 0.25, // ios shadow
  },
  buttonText: {
    textAlign: "center",
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});

export default PrimaryButton;
