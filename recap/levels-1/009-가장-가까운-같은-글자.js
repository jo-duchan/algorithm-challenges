// https://school.programmers.co.kr/learn/courses/30/lessons/142086

function solution(s) {
  const obj = {};

  const answer = [...s].reduce((acc, cur, idx) => {
    if (obj[cur] !== undefined) {
      acc.push(idx - obj[cur]);
    } else {
      acc.push(-1);
    }

    obj[cur] = idx;
    return acc;
  }, []);

  return answer;
}

// solution("aabba");
// [ -1, 1, -1, 1, 3 ]
