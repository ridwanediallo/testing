function capitalizeString(string) {
  const stringToLowerCase = string.toLowerCase();
  return stringToLowerCase[0].toUpperCase() + stringToLowerCase.slice(1);
}
capitalizeString("ridwan");

module.exports = capitalizeString;
