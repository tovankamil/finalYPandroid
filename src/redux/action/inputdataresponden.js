import Axios from 'axios';
import {API_HOST} from '../../config';
import {
  deleteTodoItem,
  getDBConnection,
  getTodoItems,
  saveTodoItems,
} from '../../db/db-service';
import {removeData, showMessage} from '../../utils';
import {setLoading, setLogout} from './global';

export const inpudataresponden = (token, data) => dispatch => {
  dispatch(setLoading(true));

  Axios.post(`${API_HOST.url}/fe/users/login/inputresponden`, data, {
    headers: {
      Authorization: `Bearer ${token?.value}`,
    },

    // timeout: 900,
  })
    .then(res => {
      if (res?.data?.msg?.length > 0) {
        dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
      }
    })
    .catch(err => {
      dispatch(setLoading(false));
      if (err.code === 'ERR_NETWORK') {
        alert('No internet connection data tersimpan di lokal');
        simpdatasqllite(data);
        // dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
      } else {
        if (err.response.status === 404) {
          simpdatasqllite(data);
          dispatch({type: 'SET_SUCCESS_DATA_INPUT'});
          dispatch(setLoading(false));
          err.response.status == 404 &&
            showMessage(
              err.response.status == 404 ? err?.response?.data?.msg : '404',
              'error',
            );
        }
        if (err.response.status === 500) {
          err.response.status !== 500 && dispatch(setLoading(false));
          showMessage(
            err.response.status == 500
              ? 'Login expired silahkan login kembali '
              : '500',
            'error',
          );
        }

        err.response.status === 500 &&
          setTimeout(() => {
            dispatch(setLoading(false));
            err.response.status === 500 && removeData('token');
            err.response.status === 500 && removeData('userProfile');

            dispatch(setLogout(true));
          }, 1000);
      }
    });
};

const simpdatasqllite = async data => {
  console.log('datasql', data);
  const db = await getDBConnection();
  const storedTodoItems = await getTodoItems(db);
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
    // // // const newTodos = [{id: 1, value: datax}];

    // await saveTodoItems(db, newTodos);
    await deleteTodoItem(db, 0);
    console.log('storedTodoItems', storedTodoItems);
    // storedTodoItems.map((d, i) => {
    //   console.log('object', Object.values(d.value));
    //   d?.value?.map((h, i) => {
    //     console.log('object', h);
    //   });
    // });
  } catch (error) {
    console.error('error save sqllite', error);
  }
};
