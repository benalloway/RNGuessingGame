import { View, Text } from "react-native";
// use <PrimaryButton>[TEXT]</PrimaryButton>
const PrimaryButton = ({ children }) => {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
};

export default PrimaryButton;
