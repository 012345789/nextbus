// Generates a color hex for any given string

export default function generateColorHex(str) {
  // return `#${intToRGB(hashCode(str))}`;
  let result = `#${intToRGB(hashCode(str))}`;
  return result;
}

// https://stackoverflow.com/a/3426956
function hashCode(str) {
  // var hash = 0;
  // for (var i = 0; i < str.length; i++) {
  //   hash = str.charCodeAt(i) + ((hash << 5) - hash);
  // }
  // return hash;

  // var hash = 0;
  //   if (str.length === 0) return hash;
  //   for (var i = 0; i < str.length; i++) {
  //       var character = str.charCodeAt(i);
  //       hash = ((hash<<5)-hash)+character;
  //       hash = hash & hash; // Convert to 32bit integer
  //   }
  //   return hash;

  return (                       // 1
    parseInt(                                 // 2
        parseInt(str, 36)  // 3
            .toExponential()                  // 4
            .slice(2,-5)                      // 5
    , 10) & 0xFFFFFF                          // 6
  ).toString(16).toUpperCase();
}

function intToRGB(i){
  var c = (i & 0x00FFFFFF)
    .toString(16)
    .toUpperCase();

  return "00000".substring(0, 6 - c.length) + c;
}
