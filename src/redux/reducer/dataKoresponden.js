const initStateRegister = {
  data_koresponden: [],
};

export default dataKorespondenReducer = (state = initStateRegister, action) => {
  if (action.type === 'LIST_DATA_KORESPONDEN')
    return {
      ...state,
      data_koresponden: action.value,
    };

  return state;
};
