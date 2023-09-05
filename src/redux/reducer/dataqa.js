const initQAReducer = {
  dataQA: [],
  dataJK: [
    {id: 1, txt: 'L', isChecked: false},
    {id: 2, txt: 'P', isChecked: false},
  ],
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
  if (action.type === 'RESET_dataJK') {
    return {
      ...state,
      dataJK: [
        {id: 1, txt: 'L', isChecked: false},
        {id: 2, txt: 'P', isChecked: false},
      ],
    };
  }
  return state;
};
