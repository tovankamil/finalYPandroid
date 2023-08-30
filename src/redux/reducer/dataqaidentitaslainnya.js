const initQAReducer = {
  dataJK: [],
  reset: false,
};

export default qaloadidentitaslainnyareducer = (
  state = initQAReducer,
  action,
) => {
  if (action.type === 'LOADING_DATA_JK_IDENTITASLAINNYA') {
    return {
      ...state,
      dataJK: action.value,
    };
  }
  if (action.type === 'RESET_DATA_JK_IDENTITASLAINNYA') {
    state.dataJK[0].isChecked = false;
    state.dataJK[1].isChecked = false;
    return {
      ...state,
    };
  }

  return state;
};
