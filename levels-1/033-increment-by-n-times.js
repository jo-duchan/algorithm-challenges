// https://school.programmers.co.kr/learn/courses/30/lessons/12954
// x만큼 간격이 있는 n개의 숫자

function incrementByNTimes(x, n) {
  const result = [];
  for (let i = 1; i <= n; i++) {
    result.push(x * i);
  }

  return result;
}

// incrementByNTimes(-4, 2);
// [-4, -8];
