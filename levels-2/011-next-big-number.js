// https://school.programmers.co.kr/learn/courses/30/lessons/12911
// 다음 큰 숫자

function nextBigNumber(n) {
  let result = 0;
  let count = n;

  const countNumbers = (num) => num.toString(2).replaceAll("0", "").length;

  while (n >= result) {
    count++;
    if (countNumbers(n) === countNumbers(count)) {
      result = count;
    }
  }

  return result;
}

// nextBigNumber(78);
// 83
