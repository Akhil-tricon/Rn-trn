import React, { useState } from "react";
import { View, Text, TextInput, Button, FlatList, TouchableOpacity } from "react-native";
import { useTodoStore } from "./todoStore";

type Todo = {
  id: number;
  text: string;
};

export default function App() {
  const [text, setText] = useState<string>("");

  const { todos, addTodo, removeTodo } = useTodoStore();

  return (
    <View style={{ padding: 40 }}>
      <Text style={{ fontSize: 24, marginBottom: 20 }}>Todo App</Text>

      <TextInput
        placeholder="Enter todo"    
        value={text}
        onChangeText={setText}
        style={{
          borderWidth: 1,
          padding: 10,
          marginBottom: 10,
        }}
      />

      <Button
        title="Add Todo"
        onPress={() => {
          if (!text) return;
          addTodo(text);
          setText("");
        }}
      />

      <FlatList
  data={todos}
  keyExtractor={(item) => item.id.toString()}
  renderItem={({ item }: { item: Todo }) => (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginTop: 10,
        padding: 10,
        borderWidth: 1,
      }}
    >
      <Text style={{ fontSize: 18 }}>{item.text}</Text>

      <Button
        title="Delete"
        color="red"
        onPress={() => removeTodo(item.id)}
      />
    </View>
  )}
/>
    </View>
  );
}