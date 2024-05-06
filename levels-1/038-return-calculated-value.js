// https://school.programmers.co.kr/learn/courses/30/lessons/12940
// 최대공약수와 최소공배수

function returnCommonDivisorAndCommonMultiple(n, m) {
  const getMinCommonDivisor = (num1, num2) => {
    let minCommonDivisor = 1;
    const minNumber = Math.min(num1, num2);

    for (let i = 1; i <= minNumber; i++) {
      if (num1 % i === 0 && num2 % i === 0) minCommonDivisor = i;
    }

    return minCommonDivisor;
  };

  const getMaxCommonMultiple = (num1, num2) => {
    let maxCommonMultiple = null;
    let repeat = 0;

    while (maxCommonMultiple === null) {
      repeat++;
      if (repeat % num1 === 0 && repeat % num2 === 0) {
        maxCommonMultiple = repeat;
      }
    }

    return maxCommonMultiple;
  };

  return [getMinCommonDivisor(n, m), getMaxCommonMultiple(n, m)];
}

// returnCommonDivisorAndCommonMultiple(3, 12);
// [3, 12]
