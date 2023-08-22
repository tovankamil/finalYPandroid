const initStateRegister = {
  data_jawaban: [],
};

export default jawabanRespondenReducer = (
  state = initStateRegister,
  action,
) => {
  if (action.type === 'POPULATE_DATA_JAWABAN_RESPONDEN_BARU') {
    // cek jika data jawaban array kosong

    if (state.data_jawaban.length <= 0) {
      state.data_jawaban.push(action.value);
    }

    if (state.data_jawaban.length > 0 && action.value.tipe == 'sc') {
      const index = state.data_jawaban.findIndex(d => {
        return action.value.idPertanyaan === d.idPertanyaan;
      });
      state.data_jawaban[index].idjawaban = action.value.idjawaban;
    }
    console.log('state', state);
    return {...state};
  }

  return state;
};
