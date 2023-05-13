const initStateRegister = {
  setting: {},
};

export default settingRelawanReducer = (state = initStateRegister, action) => {
  if (action.type === 'SETTING_RELAWAN')
    return {
      ...state,
      setting: action.value,
    };

  if (action.type === 'SET_RESET_SETTING_RELAWAN')
    return (state = initStateRegister);
  return state;
};
