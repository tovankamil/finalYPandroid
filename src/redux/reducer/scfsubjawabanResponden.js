const initStateRegister = {
  data_jawaban: [],
};

export default scfsubjawabanRespondenReducer = (
  state = initStateRegister,
  action,
) => {
  if (action.type === 'POPULATE_DATA_SCF_FIELD_SUBJAWABAN_RESPONDEN_BARU') {
    // cek jika data jawaban array kosong
    if (state.data_jawaban.length <= 0) {
      state.data_jawaban.push(action.value);
    } else {
      // field answer

      if (state.data_jawaban.length > 0 && action.value.tipe == 'scf') {
        const index = state.data_jawaban.findIndex(d => {
          return action.value.idjawaban === d.idjawaban;
        });

        if (index <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          // state.data_jawaban[0].idjawaban = action.value.idjawaban;

          state.data_jawaban[index].subjawaban = action.value.subjawaban;
        }
      }
    }
    return {...state};
  }

  return state;
};
