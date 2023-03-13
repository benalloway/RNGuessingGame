import { StyleSheet, Text } from "react-native";

const Title = ({ children, color }) => {
  const styles = StyleSheet.create({
    title: {
      fontFamily: "open-sans-bold",
      fontSize: 24,
      color: color,
      textAlign: "center",
      borderWidth: 2,
      borderColor: color,
      padding: 12,
    },
  });

  return <Text style={styles.title}>{children}</Text>;
};

export default Title;
