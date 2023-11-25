import {
  enablePromise,
  openDatabase,
  SQLiteDatabase,
} from 'react-native-sqlite-storage';
import {ToDoItem} from '../models';

const tableName = 'Respondens';

enablePromise(true);

export const getDBConnection = async () => {
  // return openDatabase({name: 'todo-datalocal.db', location: 'default'});
  try {
    return openDatabase(
      {
        name: 'yp.db',
        location: 'default',
        createfromlocation: 'yp.db',
      },
      () => {
        // Success callback
        console.log('Database opened successfully.');
      },
      error => {
        // Error callback
        console.error('Failed to open database:', error);
      },
    );
  } catch (error) {
    throw Error('Failed openDatabase !!!');
  }
  // saveTodoItems();
  // createTable();
  // getTodoItems();
};

export const createTable = async (db: SQLiteDatabase) => {
  // create table if not exists
  // db.transaction(tx => {
  //   tx.executeSql(
  //     'DROP TABLE Respondens',
  //     [],
  //     (_, result) => {
  //       // console.log('Table created successfully');
  //     },
  //     (_, error) => {
  //       // console.log('Error creating table:', error);
  //     },
  //   );
  // });
  try {
    db.transaction(tx => {
      tx.executeSql(
        'CREATE TABLE IF NOT EXISTS Respondens (id INTEGER PRIMARY KEY AUTOINCREMENT, value BLOB,image BLOB)',
        [],
        (_, result) => {
          console.log('Table created successfully');
        },
        (_, error) => {
          console.log('Error creating table:', error);
        },
      );
    });
  } catch (error) {
    throw Error('Failed create table !!!', error);
  }
};

export const getTodoItems = async (db: SQLiteDatabase): Promise<ToDoItem[]> => {
  try {
    const todoItems: ToDoItem[] = [];
    const results = await db.executeSql(`SELECT * FROM ${tableName}`);

    results.forEach(result => {
      for (let index = 0; index < result.rows.length; index++) {
        // console.log('result.rows.item(index)', result.rows.item(index));
        todoItems.push(result.rows.item(index));
      }
    });
    return todoItems;
  } catch (error) {
    throw Error('Failed to get todoItems', error);
  }
};

export const saveTodoItems = async (
  db: SQLiteDatabase,
  todoItems: ToDoItem[],
  images: String,
) => {
  const insertQuery = `insert into ${tableName} (value,image) values('${todoItems}','${images}')`;
  // `INSERT OR REPLACE INTO ${tableName}(rowid, value) values` +
  // todoItems.map(i => `(${i.id}, '${i.value}')`).join(',');

  return db.executeSql(insertQuery);
};

export const deleteTodoItem = async (db: SQLiteDatabase, id: number) => {
  console.log('delete', id);
  const deleteQuery = `DELETE from ${tableName}`;
  await db.executeSql(deleteQuery);
};

export const deleteTable = async (db: SQLiteDatabase) => {
  const query = `drop table ${tableName}`;

  await db.executeSql(query);
};
