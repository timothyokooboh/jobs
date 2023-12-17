/**
 * Create an object that is compatible with
 * what Tailwind CSS expects in its theme.extend option
 */

const tokens = require("./tokens/js/tokens");

const flattenValue = (obj) => {
  const result = {};

  Object.keys(obj).forEach((key) => {
    if (!obj[key].value) {
      result[key] = flattenValue(obj[key]);
    } else {
      result[key] = obj[key].value;
    }
  });

  return result;
};

module.exports = {
  screens: flattenValue(tokens.screens),
  colors: flattenValue(tokens.colors),
  fontSize: flattenValue(tokens.fontSize),
  lineHeight: flattenValue(tokens.lineHeight),
  fontFamily: {
    kumbhSans: "kumbh-sans",
  },
};
