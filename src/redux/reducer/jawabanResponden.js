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
    } else {
      // Single answer
      if (state.data_jawaban.length > 0 && action.value.tipe == 'sc') {
        const cektipe = state.data_jawaban.findIndex(d => {
          return action.value.tipe === d.tipe;
        });

        if (cektipe <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          const index = state.data_jawaban.findIndex(d => {
            return action.value.idPertanyaan === d.idPertanyaan;
          });
          if (index <= -1) {
            state.data_jawaban.push(action.value);
          } else {
            state.data_jawaban[index].idjawaban = action.value.idjawaban;
          }
        }
      }
      // Multiple answer
      if (state.data_jawaban.length > 0 && action.value.tipe == 'mc') {
        const cektipe = state.data_jawaban.findIndex(d => {
          return action.value.tipe === d.tipe;
        });

        if (cektipe <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          if (action.value.checked === false) {
            const index = state.data_jawaban.map((d, i) => {
              if (action.value.idjawaban === d.idjawaban) {
                state?.data_jawaban?.splice(i, 1);
              }
            });
          } else {
            state.data_jawaban.push(action.value);
          }
        }
      }
      // field answer
      if (state.data_jawaban.length > 0 && action.value.tipe == 'field') {
        const cektipe = state.data_jawaban.findIndex(d => {
          return action.value.tipe === d.tipe;
        });

        if (cektipe <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          if (action.value.checked === false) {
            const index = state.data_jawaban.map((d, i) => {
              if (action.value.idjawaban === d.idjawaban) {
                state?.data_jawaban?.splice(i, 1);
              }
            });
          } else {
            state.data_jawaban.push(action.value);
          }
        }
      }
    }
    console.log('jawabanresponden baru', state);
    return {...state};
  }

  return state;
};
