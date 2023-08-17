export const stripped = value => {
  if (/[^0-9a-zA-Z]/.test(value)) {
    return 'invalid';
  } else {
    return 'valid';
  }
};
export const onlyNumber = value => {
  return value.replace(/^\d+$/, '');
};
export const removeWhiteSpace = value => {
  return value.trim();
};
export const removeWhiteSpace2 = value => {
  return value.replace(/\s/g, '');
};
export const removeSpecialCharacter = value => {
  return value.replace(/[^a-zA-Z0-9 ]/g, '');
};
