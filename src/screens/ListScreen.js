import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
  const friends = [
    { name: 'Heidi', age: 30 },
    { name: 'Patrick', age: 35 },
    { name: 'Ericka', age: 29 },
    { name: 'Andy', age: 32 },
    { name: 'Carl', age: 34 },
    { name: 'Van', age: 36 },
    { name: 'Teilia', age: 30 },
    { name: 'Michael', age: 28 },
    { name: 'Austin', age: 27 },
  ];
  return (
    <View>
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={friend => friend.name}
        data={friends}
        renderItem={({ item }) => {
          return (
            <Text style={styles.textStyle}>
              {item.name} - Age: {item.age}
            </Text>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
});

export default ListScreen;
