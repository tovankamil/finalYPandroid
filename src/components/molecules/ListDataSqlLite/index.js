import React, {useCallback, useEffect, useState} from 'react';
import {StyleSheet, View, Text} from 'react-native';

import {ICNext, UserKoresponden} from '../../../assets';
import {
  createTable,
  deleteTodoItem,
  getDBConnection,
  getTodoItems,
} from '../../../db/db-service';
import {Gap} from '../../atoms';

const ListDataSqlLite = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState('');
  const loadDataCallback = useCallback(async () => {
    try {
      const db = await getDBConnection();
      await createTable(db);

      const storedTodoItems = await getTodoItems(db);

      if (storedTodoItems.length) {
        console.log('store', storedTodoItems);
        setTodos(storedTodoItems);
      } else {
        // await saveTodoItems(db, initTodos);
        // setTodos(initTodos);
      }
    } catch (error) {
      console.error(error);
    }
  }, []);
  useEffect(() => {
    loadDataCallback();
  }, []);

  return (
    <View style={styles.containerBox}>
      {todos.length > 0 &&
        todos?.map((data, index) => {
          // console.log('data.value', JSON.parse(data.value.nama));
          return (
            <View style={styles.container} key={index}>
              <View style={styles.box}>
                <View style={styles.icon}>
                  <UserKoresponden />
                </View>
                <View style={styles.data}>
                  <Text style={styles.nama}></Text>
                </View>
              </View>
              {/* <ICNext /> */}
            </View>
          );
        })}
    </View>
  );
};

export default React.memo(ListDataSqlLite);
const styles = StyleSheet.create({
  containerBox: {
    marginTop: 15,
  },
  container: {
    backgroundColor: '#ffffff',
    borderRadius: 0,
    paddingHorizontal: 23,
    paddingVertical: 14,
    marginBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    shadowColor: '#ddd',
    shadowOffset: {
      width: 20,
      height: 1,
    },
    shadowOpacity: 0.6,
    shadowRadius: 1.81,
    elevation: 12,
  },
  box: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  data: {
    marginLeft: 14,
    maxWidth: '100%',
  },
  nama: {
    fontFamily: 'Poppins-Medium',
    fontSize: 16,
    color: '#000000',
    lineHeight: 25,
  },
  alamat: {
    fontSize: 11,
    fontFamily: 'Poppins-reguler',
    fontWeight: 'bold',
    color: '#01B433',
    paddingLeft: 3,
  },
});
