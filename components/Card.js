import { StyleSheet, View } from "react-native";
import COLORS from "../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const styles = StyleSheet.create({
  card: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    borderRadius: 8,
    backgroundColor: COLORS.primary800,
    elevation: 4, // android drop shadow
    // IOS Shadow:
    shadowColor: "black", // ios shadow
    shadowOffset: { width: 0, height: 2 }, // ios shadow
    shadowRadius: 6, // ios shadow
    shadowOpacity: 0.25, // ios shadow
  },
});

export default Card;
