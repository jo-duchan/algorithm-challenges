// https://school.programmers.co.kr/learn/courses/30/lessons/120903

function solution(s1, s2) {
  const hashMap = s1.reduce((map, cur) => map.set(cur, cur), new Map());
  let answer = s2.filter((x) => hashMap.get(x));

  return answer.length;
}

// solution(["a", "b", "c"], ["com", "b", "d", "p", "c"]);
// 2
