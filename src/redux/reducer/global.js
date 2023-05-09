const initGlobal = {
  isError: false,
  isLogout: false,
  message: 'error',
};

export const globalReducer = (state = initGlobal, action) => {
  if (action.type === 'SET_ERROR') {
    return {
      ...state,
      isError: action.value.isError,
      messages: action.value.message,
    };
  }
  if (action.type === 'SET_LOADING') {
    return {
      ...state,
      isLoading: action.value,
    };
  }
  if (action.type === 'SET_LOGOUT') {
    return {
      ...state,
      isLogout: action.value,
    };
  }
  return state;
};
