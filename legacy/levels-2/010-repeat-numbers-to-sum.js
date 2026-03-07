// https://school.programmers.co.kr/learn/courses/30/lessons/12924
// 숫자의 표현

// N의 약수 중에서 홀수의 갯수만으로 구할 수 있음.

function repeateNumbersToSum(n) {
  const recursion = (start, count) => {
    if (start > n) return count;

    let temp = 0;
    for (let i = start; temp < n; i++) {
      temp += i;
    }
    if (temp === n) count++;

    return recursion(++start, count);
  };

  return recursion(1, 0);
}

// repeateNumbersToSum(15);
// 4
