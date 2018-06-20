const sortByString = (s, t) => {
  let sortedString = '';
  let lettersInS = {};
  for (let i = 0; i < s.length; i++) {
    lettersInS[s[i]] = lettersInS[s[i]] + 1 || 1;
  }

  for (let j = 0; j < t.length; j++) {
    const currentLetter = t[j];
    for (let k = 0; k < lettersInS[currentLetter]; k++) {
      sortedString += t[j];
    }
  }
  return sortedString;
}

console.log(`Expected Output: theeraw\nActual Output: ${sortByString('weather', 'therapyw')}`);
console.log(`Expected Output: oodg\nActual Output: ${sortByString('good', 'odg')}`);
