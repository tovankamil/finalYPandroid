const initStateRegister = {
  data: {},
};

export default topKotaReducer = (state = initStateRegister, action) => {
  if (action.type === 'SET_TOP_KOTA')
    return {
      ...state,
      data: action.value,
    };

  if (action.type === 'SET_TOP_KOTA') return (state = initStateRegister);
  return state;
};
