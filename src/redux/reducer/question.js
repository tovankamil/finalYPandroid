const initStateRegister = {
  dataQuestion: [],
  dataCheckList: [],
  loadingdatachecklist: false,
};

export default questionReducer = (state = initStateRegister, action) => {
  if (action.type === 'LIST_QUESTION') {
    return {
      ...state,
      dataQuestion: action.value,
    };
  }

  if (action.type === 'LIST_CHECKED') {
    if (state.loadingdatachecklist === false)
      if (action.value) {
        action.value.map((d, i) => {
          if (d.jawaban.length > 0) {
            d.jawaban.map((dx, i) => {
              state.loadingdatachecklist = true;
              if (state.dataCheckList.length <= 0) {
                let datainputcheck = {
                  idJawaban: dx._id,
                  isChecked: dx.isChecked !== 'false' ? true : false,
                };

                state.dataCheckList.push(datainputcheck);
              } else {
                const indexdata = state.dataCheckList.findIndex(c => {
                  return c.idJawaban === dx._id;
                });

                if (indexdata <= -1) {
                  let datainputcheck = {
                    idJawaban: dx._id,
                    isChecked: dx.isChecked !== 'false' ? true : false,
                  };
                  state.dataCheckList.push(datainputcheck);
                }
              }
            });
          }
        });
      }

    return {
      ...state,
    };
  }

  if (action.type === 'UPDATE_CHECKED') {
    const indexdata = state.dataCheckList.findIndex(c => {
      return c.idJawaban === action.value.idJawaban;
    });

    if (indexdata >= 0) {
      state.dataCheckList[indexdata].isChecked = action.value.isChecked;
    }

    return {...state};
  }

  return state;
};
