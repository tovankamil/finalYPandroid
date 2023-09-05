export const subjawabanRespondenbaru = value => {
  return {type: 'POPULATE_DATA_SUBJAWABAN_RESPONDEN_BARU', value};
};

export const scfjawabanRespondenbaru = value => {
  return {type: 'POPULATE_DATA_SCF_SUBJAWABAN_RESPONDEN_BARU', value};
};
export const scffieldjawabanRespondenbaru = value => {
  return {type: 'POPULATE_DATA_SCF_FIELD_SUBJAWABAN_RESPONDEN_BARU', value};
};
export const resetscffieldjawabanRespondenbaru = value => {
  return {
    type: 'RESET_POPULATE_DATA_SCF_FIELD_SUBJAWABAN_RESPONDEN_BARU',
    value,
  };
};
