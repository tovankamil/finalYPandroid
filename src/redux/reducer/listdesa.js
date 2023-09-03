const initStateRegister = {
  data_desa: [],
  nama_desa: '',
  value: '',
};

export default listkotaReducer = (state = initStateRegister, action) => {
  if (action.type === 'NEW_LIST_DATA_DESA')
    return {
      ...state,
      data_desa: action.value,
    };

  if (action.type === 'NEW_DATA_DESA') {
    return {
      ...state,
      value: action.value.value,
      nama_desa: action.value.nama_desa,
    };
  }

  if (action.type === 'RESET_NEW_DATA_DESA') {
    return {
      ...state,
      data_desa: [],
    };
  }

  return state;
};
