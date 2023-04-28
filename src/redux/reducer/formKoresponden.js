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
      kecamatan: action.value.kecamatan,
      desa: action.value.nama_desa,
    };
  if (action.type === 'SET_KECAMATAN_KORESPONDEN')
    return {
      ...state,
      kecamatan: action.value,
    };
  if (action.type === 'SET_DESA_KORESPONDEN')
    return {
      ...state,
      desa: action.value,
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
  if (action.type === 'SET_RESET_FORM')
    return (state = initStateRegisterKoresponden);
  return state;
};
