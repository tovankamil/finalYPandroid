import Axios from 'axios';
import {API_HOST} from '../../config';
import {
  createTable,
  deleteTodoItem,
  getDBConnection,
  getTodoItems,
  saveTodoItems,
} from '../../db/db-service';
import {removeData, showMessage} from '../../utils';
import {setLoading, setLogout} from './global';

export const inpudataresponden = (token, data) => async dispatch => {
  // dispatch(setLoading(true));
  await simpdatasqllite(data);
  // Axios.post(`${API_HOST.url}/fe/users/login/inputresponden`, data, {
  //   headers: {
  //     Authorization: `Bearer ${token?.value}`,
  //   },

  //   // timeout: 900,
  // })
  //   .then(res => {
  //     if (res?.data?.msg?.length > 0) {
  //       dispatch(setLoading(false));
  //       dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
  //     }
  //   })
  //   .catch(err => {
  //     dispatch(setLoading(false));
  //     if (err.code === 'ERR_NETWORK') {
  //       alert('No internet connection data tersimpan di lokal');
  //       simpdatasqllite(data, dispatch);
  //     } else {
  //       if (err?.response?.status === 404) {
  //         simpdatasqllite(data);
  //         dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
  //         dispatch(setLoading(false));
  //         err?.response?.status == 404 &&
  //           showMessage(
  //             err.response.status == 404 ? err?.response?.data?.msg : '404',
  //             'error',
  //           );
  //       }
  //       if (err?.response?.status === 500) {
  //         err?.response?.status !== 500 && dispatch(setLoading(false));
  //         dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
  //         showMessage(
  //           err?.response?.status == 500
  //             ? 'Login expired silahkan login kembali '
  //             : '500',
  //           'error',
  //         );
  //       }

  //       err.response.status === 500 &&
  //         setTimeout(() => {
  //           dispatch(setLoading(false));
  //           err.response.status === 500 && removeData('token');
  //           err.response.status === 500 && removeData('userProfile');

  //           dispatch(setLogout(true));
  //         }, 1000);
  //     }
  //   });
};

const simpdatasqllite = async (data, dispatch) => {
  // console.log('datasql', data);
  const db = await getDBConnection();

  // if (!newTodo.trim()) return;
  try {
    // const newTodos = [
    //   ...storedTodoItems,
    //   {
    //     id: storedTodoItems.length
    //       ? storedTodoItems.reduce((acc, cur) => {
    //           if (cur.id > acc.id) return cur;
    //           return acc;
    //         }).id + 1
    //       : 0,
    //     value: Object.values(data),
    //   },
    // ];
    await createTable(db);
    let dataImages = 'dataimages';
    delete data.images;
    await saveTodoItems(db, JSON.stringify(data), JSON.stringify(dataImages));
    const storedTodoItems = await getTodoItems(db);
    console.log('datax', storedTodoItems.value);

    // dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
    // await deleteTodoItem(db, 0);
    // console.log('storedTodoItems', db);
  } catch (error) {
    console.error('error save sqllite', error);
  }
};
