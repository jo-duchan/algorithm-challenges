// https://school.programmers.co.kr/learn/courses/30/lessons/181934

function solution(ineq, eq, n, m) {
  const condition = {
    '>=': (n, m) => n >= m,
    '<=': (n, m) => n <= m,
    '>!': (n, m) => n > m,
    '<!': (n, m) => n < m,
  };

  return condition[`${ineq}${eq}`](n, m) ? 1 : 0;
}

// solution('<', '=', 20, 50);
// 1
