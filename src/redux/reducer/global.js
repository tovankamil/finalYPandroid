const initGlobal = {
  isError: false,
  isLogout: false,
  message: 'error',
  tabIndexInputKoresponden: 2,
  nikError: '',
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
  if (action.type === 'SET_TABINPUTKORESPONDEN') {
    return {
      ...state,
      tabIndexInputKoresponden: action.value,
    };
  }
  if (action.type === 'SET_NIK_ERROR') {
    return {
      ...state,
      nikError: action.value,
    };
  }
  return state;
};
