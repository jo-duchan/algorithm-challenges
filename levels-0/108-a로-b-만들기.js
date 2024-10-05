// https://school.programmers.co.kr/learn/courses/30/lessons/120886

function solution(before, after) {
  const sortedAfter = [...after].sort().join("");
  const sortedBefore = [...before].sort().join("");

  return sortedAfter === sortedBefore ? 1 : 0;
}

// solution("olleh", "hello");
// 1
