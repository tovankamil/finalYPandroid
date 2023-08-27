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
    return {
      ...state,
      dataJK: action.value,
    };
  }

  return state;
};
