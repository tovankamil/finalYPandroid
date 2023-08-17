const initStateRegisterKoresponden = {
  nama: '',
  nik: '',
  hp: '',
  usia: '',
  koordinator: '',
  alamat: '',
  nama_kota: '',
  kota: '',
  nama_kecamatan: '',
  kecamatan: '',
  nama_desa: '',
  desa: '',
  nik: '',
  brosur: '',
  spanduk: '',
  baju: '',
  lainnya: '',
  qa1: '',
  qa2: '',
  qa3: '',
  attribute: [],
  qa0: [],
  dataattribute: [],
};

export const formKorespondenReducer = (
  state = initStateRegisterKoresponden,
  action,
) => {
  if (action.type === 'SET_PROFILE_KORESPONDEN')
    return {
      ...state,
      nama: action.value.nama,
      hp: action.value.hp,
      nik: action.value.nik,
      usia: action.value.usia,
      alamat: action.value.alamat,
    };

  if (action.type === 'SET_KOTA_KORESPONDEN')
    return {
      ...state,
      kota: action.value.kota,
      nama_kota: action.value.nama_kota,
      kecamatan: '',
      nama_kecamatan: '',
      desa: '',
      nama_desa: '',
    };
  if (action.type === 'SET_KECAMATAN_KORESPONDEN')
    return {
      ...state,
      kecamatan: action.value.kecamatan,
      nama_kecamatan: action.value.nama_kecamatan,
    };
  if (action.type === 'SET_DESA_KORESPONDEN')
    return {
      ...state,
      desa: action.value.desa,
      nama_desa: action.value.nama_desa,
    };

  if (action.type === 'RESET_DESA_KORESPONDEN')
    return {
      ...state,
      desa: '',
      nama_desa: '',
    };
  if (action.type === 'SET_ALL_ATTRIBUTE')
    return {
      ...state,
      attribute: action.value,
    };

  if (action.type === 'RESET_DATA_ATTRIBUTE')
    return {
      ...state,
      dataattribute: [],
    };
  if (action.type === 'SET_ATTRIBUTE_SPANDUK')
    return {
      ...state,
      spanduk: action.value.spanduk,
    };

  if (action.type === 'SET_ATTRIBUTE_BAJU')
    return {
      ...state,
      baju: action.value.baju,
    };

  if (action.type === 'SET_ATTRIBUTE_BROSUR')
    return {
      ...state,
      brosur: action.value.brosur,
    };
  if (action.type === 'SET_ATTRIBUTE_LAINNYA')
    return {
      ...state,
      lainnya: action.value.lainnya,
    };

  if (action.type === 'SET_QA')
    return {
      ...state,
      qa1: action.value.qa1,
      qa2: action.value.qa2,
      qa3: action.value.qa3,
    };
  if (action.type === 'SET_NEWQA')
    return {
      ...state,
      qa0: action.value,
    };

  if (action.type === 'SET_RESET_FORM')
    return (state = initStateRegisterKoresponden);
  return state;
};
