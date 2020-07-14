import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
  const [password, setPassword] = useState('');
  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        placeholder="password"
        value={password}
        onChangeText={newValue => setPassword(newValue)}
      />
      {password.length < 4 ? (
        <Text>Password must be at least four characters</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    backgroundColor: 'red',
    color: 'white',
  },
});

export default TextScreen;
