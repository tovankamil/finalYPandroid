const initStateRegister = {
  setting: [],
};

export default settingRelawanReducer = (state = initStateRegister, action) => {
  if (action.type === 'SETTING_RELAWAN')
    return {
      ...state,
      setting: action.value,
    };

  return state;
};
