import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  const goToScreen = navigation.navigate;
  return (
    <View>
      <Text style={styles.text}>Blorgon!</Text>
      <Text>&nbsp;</Text>
      <Button
        title="Components"
        onPress={() => goToScreen('Components')}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Lists"
        onPress={() => goToScreen('List')}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Images"
        onPress={() => goToScreen('Image')}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Counter"
        onPress={() => goToScreen('Counter')}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Color"
        onPress={() => goToScreen('Color')}
      />
      <Text>&nbsp;</Text>
      <Button
        title="Square"
        onPress={() => goToScreen('Square')}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
