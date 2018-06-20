const changePossibilities = (amount, denominations) => {
  let possibilities = 0;
  let remainders = [amount];
  for (let i = 0; i < denominations.length; i++) {
    let j = 0;
    let k = remainders.length;
    while (j < k) {
      let left = remainders[j];
      while (left > 0) {
        left -= denominations[i];
        if (left > 0) remainders.push(left);
      }
      if (left === 0) possibilities++;
      j++;
    }
  }
  return possibilities;
}

console.log(`Expected Output: 4\nActual Output: ${changePossibilities(4, [1, 2, 3])}`);
