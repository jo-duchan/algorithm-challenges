// https://school.programmers.co.kr/learn/courses/30/lessons/120912

function solution(array) {
  const answer = array
    .join("")
    .split("")
    .filter((x) => x === "7");

  return answer.length;
}

// solution([7, 77, 17]);
// 4
