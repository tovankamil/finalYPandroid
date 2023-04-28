const initStateRegister = {
  data_kota: [],
  data_kecamatan: [],
  data_desa: [],
  id_kecamatan: '',
  kota_id: '',
  nama_kecamatan: '',
  id_desa: '',
  desa_kota_id: '',
  desa_kecamatan: '',
};

export default dataProvinsi = (state = initStateRegister, action) => {
  if (action.type === 'LIST_DATA_PROVINSI')
    return {
      ...state,

      data_kota: action.value,
    };
  if (action.type === 'LIST_DATA_KOTA')
    return {
      ...state,

      data_kota: action.value,
    };
  if (action.type === 'LIST_DATA_KECAMATAN') {
    state.data_desa = [];

    return {
      ...state,
      data_kecamatan: action.value,
      data_desa: [],
    };
  }

  if (action.type === 'LIST_DATA_DESA')
    return {
      ...state,

      data_desa: action.value,
    };
  if (action.type === 'LIST_DATA_DESA_RESET') {
    state.data_desa = [];

    return {
      ...state,
      data_kecamatan: action.value,
      data_desa: [],
    };
  }

  return state;
};
