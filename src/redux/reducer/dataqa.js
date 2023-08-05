const initQAReducer = {
  dataQA: [],
};

export default qaloadreducer = (state = initQAReducer, action) => {
  if (action.type === 'LOADING_DATA_QA') {
    return {
      ...state,
      dataQA: action.value,
    };
  }

  return state;
};
