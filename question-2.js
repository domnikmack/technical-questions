const decodeString = s => {
  let decodedStr = '';
  let numberStr = '';
  for (let i = 0; i < s.length; i++) {
    let current = s[i];
    if (!isNaN(current)) {
      numberStr += current;
    }
    else if (current === '[') {
      let endIdx = s.lastIndexOf(']');
      let substring = (decodeString(s.slice(i + 1, endIdx)));
      for (let x = 0; x < +numberStr; x++) {
        decodedStr += substring;
      }
      numberStr = '';
      i = endIdx;

    } else if (current !== ']') {
      decodedStr += current;
    }
  }
  return decodedStr;
}

console.log(`Expected Output: abababab\nActual Output: ${decodeString('4[ab]')}`);
console.log(`Expected Output: baaabaaa\nActual Output: ${decodeString('2[b3[a]]]')}`);
