function problem1(pobi, crong) {
  let answer = 0;

  let pobiPagePlus = pobi.map((el) => {
    return el
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, arr) => acc + arr + 0);
  });
  let pobiPageMultiply = pobi.map((el) => {
    return el
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, arr) => acc * arr);
  });
  let crongPagePlus = crong.map((el) => {
    return el
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, arr) => acc + arr + 0);
  });
  let crongPageMultiply = crong.map((el) => {
    return el
      .toString()
      .split("")
      .map((x) => parseInt(x))
      .reduce((acc, arr) => acc * arr);
  });

  const pobiArray = pobiPagePlus.concat(pobiPageMultiply);
  const pobiMax = Math.max.apply(null, pobiArray);
  const crongArray = crongPagePlus.concat(crongPageMultiply);
  const crongMax = Math.max.apply(null, crongArray);
  const pobiDifference = pobi[1] - pobi[0];
  const crongDifference = crong[1] - crong[0];

  if (pobiMax > crongMax) answer = 1;
  else if (pobiMax < crongMax) answer = 2;
  else answer = 0;

  if (pobiDifference !== 1 || crongDifference !== 1) return (answer = -1);
  return answer;
}

module.exports = problem1;
