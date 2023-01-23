import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [ todos, setTodos ] = useState([
    { text: 'pray', key: 1 },
    { text: 'study', key: 2 },
    { text: 'exercise', key: 3 },
  ]);
  
  const deleteHandler = (key) => {
    setTodos(( prevTodos ) => {
      return prevTodos.filter( item => item.key != key )
    })
  }

  const addHandler = ( item ) => {
    setTodos((prevItems) => {
      return [
        { text: item, key: Math.random().toString() },
        ...prevItems
      ]
    })
  }

  return (
    <View style={styles.container}>
        <Header />
        <View style={styles.content}>
          <AddTodo addHandler={addHandler}/>
          <FlatList
            data={todos}
            renderItem={({ item }) => (
              <TodoItem item={item} deleteHandler={deleteHandler} />
            )}
          />
        </View>
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 34
  }
});
