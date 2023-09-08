const initStateRegister = {
  username: '',
  nama: '',
  password: '',
  hp: '',
  umur: '',
  jenisKelamin: '',
  koordinator: '',
  alamat: '',
  nama_kota: '',
  kota: '',
  nama_kecamatan: '',
  kecamatan: '',
  nama_desa: '',
  desa: '',
  nik: '',
};

export const registerReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_REGISTER')
    return {
      ...state,
      username: action.value.username,
      nama: action.value.nama,
      password: action.value.password,
      hp: action.value.hp,
      jenisKelamin: action.value.jenisKelamin,
      koordinator: action.value.koordinator,
      umur: action.value.umur,
    };

  if (action.type === 'SET_ADDRESS')
    return {
      ...state,
      nama_kota: action.value.nama_kota,
      kota: action.value.kota,
      nama_kecamatan: action.value.nama_kecamatan,
      kecamatan: action.value.kecamatan,
      nama_desa: action.value.nama_desa,
      desa: action.value.desa,
    };
  if (action.type === 'SET_KOTA')
    return {
      ...state,
      nama_kota: action.value.split('#')[1],
      kota: action.value.split('#')[0],
    };
  if (action.type === 'SET_KECAMATAN')
    return {
      ...state,
      nama_kecamatan: action.value.split('#')[1],
      kecamatan: action.value.split('#')[0],
    };
  if (action.type === 'SET_DESA')
    return {
      ...state,
      nama_desa: action.value.split('#')[1],
      desa: action.value.split('#')[0],
    };

  if (action.type === 'SET_ALAMAT')
    return {
      ...state,
      alamat: action.value.alamat,
    };
  if (action.type === 'SET_NIK')
    return {
      ...state,
      nik: action.value.nik,
    };
  return state;
};
