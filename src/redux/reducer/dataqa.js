const initQAReducer = {
  dataQA: [],
  dataJK: [],
};

export default qaloadreducer = (state = initQAReducer, action) => {
  if (action.type === 'LOADING_DATA_QA') {
    return {
      ...state,
      dataQA: action.value,
    };
  }
  if (action.type === 'LOADING_DATA_JK') {
    return {
      ...state,
      dataJK: action.value,
    };
  }

  return state;
};
