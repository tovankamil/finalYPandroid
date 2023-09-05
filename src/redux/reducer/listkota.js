const initStateRegister = {
  data_kota: [],
  nama_kota: '',
  value: '',
};

export default listkotaReducer = (state = initStateRegister, action) => {
  if (action.type === 'NEW_LIST_DATA_KOTA')
    return {
      ...state,
      data_kota: action.value,
    };

  if (action.type === 'NEW_DATA_KOTA') {
    return {
      ...state,
      value: action.value.value,
      nama_kota: action.value.nama_kota,
    };
  }

  if (action.type === 'RESET_NEW_DATA_KOTA') {
    state.nama_kota = '';
    state.value = '';
    return state;
  }

  return state;
};
