const initStateRegister = {
  data_kecamatan: [],
  nama_kecamatan: '',
  value: '',
};

export default listkotaReducer = (state = initStateRegister, action) => {
  if (action.type === 'NEW_LIST_DATA_KECAMATAN')
    return {
      ...state,
      data_kecamatan: action.value,
    };

  if (action.type === 'NEW_DATA_KECAMATAN') {
    return {
      ...state,
      value: action.value.value,
      nama_kecamatan: action.value.nama_kecamatan,
    };
  }

  if (action.type === 'RESET_NEW_DATA_KECAMATAN') {
    state.nama_kecamatan = '';
    state.value = '';
    return state;
  }

  return state;
};
