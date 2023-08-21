const initStateRegister = {
  dataQuestion: [],
};

export default questionReducer = (state = initStateRegister, action) => {
  if (action.type === 'LIST_QUESTION')
    return {
      ...state,
      dataQuestion: action.value,
    };

  return state;
};
