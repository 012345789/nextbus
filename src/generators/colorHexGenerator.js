// Generates a color hex for any given string

export default function generateColorHex(str) {
  return `#${intToRGB(hashCode(hashCode(str)))}`;
}

// https://stackoverflow.com/a/3426956
function hashCode(str) {
  str = str + "randomString"; // for wider spectrum of hashing
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return hash;
}

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}
