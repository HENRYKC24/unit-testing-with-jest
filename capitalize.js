const capitalize = (str) =>
  str.toString().slice(0, 1).toUpperCase() +
  str.toString().toLowerCase().slice(1);
module.exports = capitalize;