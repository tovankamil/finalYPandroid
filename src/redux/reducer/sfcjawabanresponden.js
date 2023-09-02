const initStateRegister = {
  data_jawaban: [],
  dataChecked: [],
};

export default scfjawabanRespondenReducer = (
  state = initStateRegister,
  action,
) => {
  if (action.type === 'POPULATE_DATA_SCF_SUBJAWABAN_RESPONDEN_BARU') {
    // cek jika data jawaban array kosong
    if (state.data_jawaban.length <= 0) {
      state.data_jawaban.push(action.value);
      let data = {
        idjawaban: action.value.idjawaban,
        checked: true,
      };
      state.dataChecked.push(data);
    } else {
      // field answer

      if (state.data_jawaban.length > 0 && action.value.tipe == 'scf') {
        const index = state.data_jawaban.findIndex(d => {
          return action.value.idPertanyaan === d.idPertanyaan;
        });

        if (index <= -1) {
          state.data_jawaban.push(action.value);
        } else {
          state.data_jawaban[index].idjawaban = action.value.idjawaban;
          if (state.dataChecked.length <= 0) {
            let data = {
              idjawaban: action.value.idjawaban,
              checked: true,
            };
            state.dataChecked.push(data);
          } else {
          }
          const index2 = state.dataChecked.map((dx, i) => {
            state.dataChecked[i].checked = false;
            if (action.value.idjawaban === dx.idjawaban) {
              state.dataChecked[i].checked = true;
            }
          });
        }
      }
    }
    return {...state};
  }

  return state;
};
