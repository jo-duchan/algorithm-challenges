// https://school.programmers.co.kr/learn/courses/30/lessons/12977
// 소수 만들기

function creationPrimeNumber(numbers) {
  // 조합 만들기
  const getCombination = (arr, selectNum) => {
    const combinationArr = [];
    if (selectNum === 1) return arr.map((x) => [x]);

    arr.forEach((cur, idx, arr) => {
      const rest = arr.slice(idx + 1);
      const combinations = getCombination(rest, selectNum - 1);
      const attached = combinations.map((x) => [cur, ...x]);

      combinationArr.push(...attached);
    });

    return combinationArr;
  };

  const combinationArr = getCombination(numbers, 3);
  const sumArr = combinationArr.reduce((acc, cur) => {
    return [...acc, cur.reduce((acc, cur) => (acc += cur), 0)];
  }, []);

  const result = sumArr.filter((x) => {
    if (x === 2) return x;
    // 제곱근까지만 소수 찾기
    for (let i = 2; i <= Math.floor(Math.sqrt(x)); i++) {
      if (x % i === 0) return;
    }
    return x;
  });

  return result.length;
}

// creationPrimeNumber([1, 2, 3, 4]);
// 1
