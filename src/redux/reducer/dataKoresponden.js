const initStateRegister = {
  data_koresponden: [],
};

export default dataKorespondenReducer = (state = initStateRegister, action) => {
  if (action.type === 'LIST_DATA_KORESPONDEN')
    return {
      ...state,
      data_koresponden: action.value,
    };
  if (action.type === 'RESET_LIST_DATA_KORESPONDEN')
    return {
      ...state,
      data_koresponden: initStateRegister,
    };

  return state;
};
