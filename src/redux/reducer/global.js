const initGlobal = {
  isError: false,
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
  return state;
};
