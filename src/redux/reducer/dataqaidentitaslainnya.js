const initQAReducer = {
  dataJK: [],
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

  return state;
};
