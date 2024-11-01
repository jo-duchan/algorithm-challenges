// https://school.programmers.co.kr/learn/courses/30/lessons/120896

function solution(s) {
  let answer = [];
  const sHashMap = [...s].reduce((acc, cur) => {
    if (acc.has(cur)) {
      acc.set(cur, acc.get(cur) + 1);
    } else {
      acc.set(cur, 0);
    }

    return acc;
  }, new Map());

  sHashMap.forEach((val, key) => {
    if (val === 0) {
      answer.push(key);
    }
  });

  return answer.sort().join("");
}

// solution("hello");
// eho
