const characterCount = str => {
  const len = str.length;
  if ((len > 0 && len < 11)) {
    return str.length;
  } else {
    throw new Error('The string must be greater than 0 and less than 11 characters long');
  }
};
module.exports = characterCount;