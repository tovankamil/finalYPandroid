const initGlobal = {
  isError: false,
  isLogout: false,
  message: 'error',
  tabIndexInputKoresponden: 1,
  nikError: '',
  usia: '',
  qaerror: '',
  atrerror: '',
  identitasError: '',
  calegnasional: false,
  calegpropinsi: false,
  calegkabupaten: false,
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
  if (action.type === 'SET_USIA_ERROR') {
    return {
      ...state,
      usia: action.value,
    };
  }
  if (action.type === 'SET_QA_ERROR') {
    return {
      ...state,
      qaerror: action.value,
    };
  }
  if (action.type === 'SET_ATR_ERROR') {
    return {
      ...state,
      atrerror: action.value,
    };
  }
  if (action.type === 'SET_IDENTITAS_ERROR') {
    return {
      ...state,
      identitasError: action.value,
    };
  }
  if (action.type === 'SET_SUCCESS_CALEG_NASIONAL') {
    return {
      ...state,
      calegnasional: action.value,
    };
  }
  return state;
};
