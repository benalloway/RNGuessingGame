import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        maxLength={2}
        inputMode="numeric"
        keyboardAppearance="light"
        style={styles.numberInput}
      />
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: "#4e0329",
    elevation: 4, // android drop shadow
    // IOS Shadow:
    shadowColor: "black", // ios shadow
    shadowOffset: { width: 0, height: 2 }, // ios shadow
    shadowRadius: 6, // ios shadow
    shadowOpacity: 0.25, // ios shadow
  },
  numberInput: {
    marginVertical: 8,
    height: 50,
    width: 50,

    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,

    textAlign: "center",
    fontSize: 32,
    color: "#ddb52f",
    fontWeight: "bold",
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;
