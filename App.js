import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { FlatList, StyleSheet, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
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

  const addHandler = ( text ) => {
    if(text.length > 3){
      setTodos((prevtexts) => {
        return [
          { text: text, key: Math.random().toString() },
          ...prevtexts
        ]
      })
    } else {
      Alert.alert('Oops!', 'Text long must atleast 4 chars.', [
        { text: 'Understood', onPress: () => console.log('Alert closed') }
      ])
    }
  }

  return (
    <TouchableWithoutFeedback
      onPress={() => Keyboard.dismiss()}
    >
      <View style={styles.container}>
          <Header />
          <View style={styles.content}>
            <AddTodo addHandler={addHandler}/>
            <View style={styles.list}>
              <FlatList
                data={todos}
                renderItem={({ item }) => (
                  <TodoItem item={item} deleteHandler={deleteHandler} />
                )}
              />
            </View>
          </View>
        {/* <StatusBar style="auto" /> */}
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    padding: 34,
    flex: 1
  },
  list: {
    marginTop: 20,
    flex: 1
  }
});
