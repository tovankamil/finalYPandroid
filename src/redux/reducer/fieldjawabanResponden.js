const initStateRegister = {
  data_jawaban: [],
};

export default fieldjawabanRespondenReducer = (
  state = initStateRegister,
  action,
) => {
  if (action.type === 'POPULATE_DATA_JAWABAN_RESPONDEN_FIELD') {
    // cek jika data jawaban array kosong
    if (state.data_jawaban.length <= 0) {
      state.data_jawaban.push(action.value);
    } else {
      // field answer

      if (state.data_jawaban.length > 0 && action.value.tipe == 'field') {
        const index = state.data_jawaban.findIndex(d => {
          return action.value.idPertanyaan === d.idPertanyaan;
        });

        if (index <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          state.data_jawaban[0].fieldjawaban = action.value.fieldjawaban;
        }
      }
    }
    console.log('field jawaban', state);
    return state;
  }

  return state;
};